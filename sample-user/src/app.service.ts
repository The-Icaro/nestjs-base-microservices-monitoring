import { Injectable } from '@nestjs/common';
import { CreateUser } from './create-user.dto';

@Injectable()
export class AppService {
  private readonly users: Array<any> = [];

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUser: CreateUser): Array<any> {
    console.log('User with be Created! - User Microservice', createUser);
    this.users.push(createUser);
    return this.users;
  }
}
