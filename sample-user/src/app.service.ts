import { Injectable } from '@nestjs/common';
import { CreateUser } from './create-user.dto';
import { User } from './user.dto';

@Injectable()
export class AppService {
  private readonly users: Array<User> = [];

  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): Array<User> {
    return this.users;
  }

  createUser(createUser: CreateUser): void {
    console.log('User with be Created! - User Microservice', createUser);
    this.users.push({ ...createUser, createdDate: new Date() });
  }
}
