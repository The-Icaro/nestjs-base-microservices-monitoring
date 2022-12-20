import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { LoggingInterceptor } from './logging.interceptor';
import { JoiValidationSchema } from '../config/joi_validation';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo';
import { IntrospectAndCompose } from '@apollo/gateway';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: false,
      validationSchema: JoiValidationSchema,
      envFilePath: '.env',
    }),
    GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
      driver: ApolloGatewayDriver,
      gateway: {
        supergraphSdl: new IntrospectAndCompose({
          subgraphs: [
            {
              name: process.env.SUBGRAPHS_USER_NAME,
              url: process.env.SUBGRAPHS_USER_URL,
            },
            {
              name: process.env.SUBGRAPHS_BOOK_NAME,
              url: process.env.SUBGRAPHS_BOOK_URL,
            },
          ],
          subgraphHealthCheck: true,
        }),
      },
    }),
    PrometheusModule.register(),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
