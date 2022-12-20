import { Field, InputType } from '@nestjs/graphql';
import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class CreateBook {
  @Field()
  @IsNotEmpty()
  @IsString()
  title: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  description: string;

  @Field()
  @IsNotEmpty()
  @IsString()
  category: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  realeaseYear?: Date;
}
