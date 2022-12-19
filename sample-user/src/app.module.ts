import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JoiValidationSchema } from 'config/joi_validation';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      validationSchema: JoiValidationSchema,
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
