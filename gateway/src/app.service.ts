import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUser } from './create-user.dto';
import { CreateBook } from './create-book.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('USER') private readonly userClient: ClientProxy,
    @Inject('BOOK') private readonly bookClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createUser(createUser: CreateUser): void {
    console.log('User with be Created! - Gateway');
    this.userClient.emit('create_user', createUser);
  }

  createBook(createBook: CreateBook): void {
    console.log('Book with be Created! - Gateway');
    this.bookClient.emit('create_book', createBook);
  }
}
