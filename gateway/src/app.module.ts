import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingInterceptor } from './logging.interceptor';
import { JoiValidationSchema } from '../config/joi_validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      validationSchema: JoiValidationSchema,
      envFilePath: '.env',
    }),
    PrometheusModule.register(),
    ClientsModule.register([
      {
        name: process.env.RABBITMQ_MODULE_USER_NAME,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URI],
          queue: process.env.RABBITMQ_MODULE_USER_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
      {
        name: process.env.RABBITMQ_MODULE_BOOK_NAME,
        transport: Transport.RMQ,
        options: {
          urls: [process.env.RABBITMQ_URI],
          queue: process.env.RABBITMQ_MODULE_BOOK_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
