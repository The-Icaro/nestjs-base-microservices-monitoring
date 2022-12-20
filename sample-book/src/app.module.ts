import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JoiValidationSchema } from '../config/joi_validation';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      validationSchema: JoiValidationSchema,
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
    }),
    BookModule,
  ],
})
export class AppModule {}
