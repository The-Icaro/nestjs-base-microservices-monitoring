import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MutationTransaction {
  @Field(() => Int)
  indentifier: number;

  @Field(() => Int)
  rowsAffected: number;
}
