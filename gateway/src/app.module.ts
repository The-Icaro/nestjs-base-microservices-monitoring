import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggingInterceptor } from './logging.interceptor';

@Module({
  imports: [
    PrometheusModule.register(),
    ClientsModule.register([
      {
        name: 'USER',
        transport: Transport.TCP,
        options: {
          port: 3000,
        },
      },
      {
        name: 'BOOK',
        transport: Transport.TCP,
        options: {
          port: 3001,
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
