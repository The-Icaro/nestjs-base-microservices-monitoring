import { InputType, Field } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsNumber,
  IsEmail,
} from 'class-validator';

@InputType()
export class CreateUser {
  @Field()
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @Field()
  @IsOptional()
  @IsString()
  lastName?: string;

  @Field()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  age?: number;
}
