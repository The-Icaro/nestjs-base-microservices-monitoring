import { Directive, Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Directive('@key(fields: "id")')
export class Book {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field({ nullable: true })
  realeaseYear?: Date;
}
