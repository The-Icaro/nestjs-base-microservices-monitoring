import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { JoiValidationSchema } from 'config/joi_validation';
import { UserModule } from './user/user.module';

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
    UserModule,
  ],
})
export class AppModule {}
