import { Injectable } from '@nestjs/common';
import { CreateUser } from './dto/input/createUser.input';
import { UpdateUser } from './dto/input/updateUser.input';
import { MutationTransaction } from './dto/mutationTransaction.dto';
import { User } from './model/user.model';

@Injectable()
export class UserService {
  private users: Array<User> = [];

  public createUser(createUser: CreateUser): User {
    const user: User = {
      id: this.users.length + 1,
      ...createUser,
    };

    this.users.push(user);

    return user;
  }

  public updateUserById(updateUser: UpdateUser): MutationTransaction {
    const mutationTransaction: MutationTransaction = {
      indentifier: updateUser.id,
      rowsAffected: 0,
    };

    const user = this.users.find((user) => user.id === updateUser.id);

    if (!user) return mutationTransaction;

    Object.assign(user, updateUser);
    mutationTransaction.rowsAffected = 1;

    return mutationTransaction;
  }

  public getUserById(userId: number): User {
    return this.users.find((user) => user.id === userId);
  }

  public getUsers(): Array<User> {
    return this.users;
  }

  public deleteUserById(userId: number): MutationTransaction {
    const mutationTransaction: MutationTransaction = {
      indentifier: userId,
      rowsAffected: 0,
    };

    const userIndex = this.users.findIndex((user) => user.id === userId);

    if (userIndex === -1) return mutationTransaction;

    this.users.splice(userIndex);
    mutationTransaction.rowsAffected = 1;

    return mutationTransaction;
  }
}
