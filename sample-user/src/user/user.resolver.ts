import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CreateUser } from './dto/input/createUser.input';
import { UpdateUser } from './dto/input/updateUser.input';
import { MutationTransaction } from './dto/mutationTransaction.dto';
import { User } from './model/user.model';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], {
    name: 'users',
    nullable: 'items',
    description: 'Get All Users',
  })
  getUsers(): Array<User> {
    return this.userService.getUsers();
  }

  @Query(() => User, {
    name: 'user',
    nullable: true,
    description: 'Get User By Id',
  })
  getUserById(@Args({ name: 'id', type: () => Int }) userId: number): User {
    return this.userService.getUserById(userId);
  }

  @Mutation(() => User, {
    name: 'create_user',
    nullable: false,
    description: 'Create User',
  })
  createUser(@Args('createUser') createUser: CreateUser): User {
    return this.userService.createUser(createUser);
  }

  @Mutation(() => MutationTransaction, {
    name: 'update_user',
    nullable: false,
    description: 'Update User By Id',
  })
  updateUserById(
    @Args('updateUser') updateUser: UpdateUser,
  ): MutationTransaction {
    return this.userService.updateUserById(updateUser);
  }

  @Mutation(() => MutationTransaction, {
    name: 'delete_user',
    nullable: false,
    description: 'Delete User By Id',
  })
  deleteUserById(
    @Args({ name: 'id', type: () => Int }) userId: number,
  ): MutationTransaction {
    return this.userService.deleteUserById(userId);
  }
}
