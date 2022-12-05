import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUser } from './create-user.dto';
import { CreateBook } from './create-book.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  getUsers() {
    return this.appService.getUsers();
  }

  @Post('/user/create')
  createUser(@Body() createUser: CreateUser): void {
    return this.appService.createUser(createUser);
  }

  @Post('/book/create')
  createBook(@Body() createBook: CreateBook): void {
    return this.appService.createBook(createBook);
  }
}
