import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser } from './create-user.dto';

@Injectable()
export class AppService {
  constructor(@Inject('USER') private readonly userClient: ClientProxy) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUser: CreateUser): void {
    console.log('User with be Created! - Gateway');
    this.userClient.emit('create_user', createUser);
  }
}
