import { Controller, Get } from '@nestjs/common';
import {
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { AppService } from './app.service';
import { CreateBook } from './create-book.dto';
import { Book } from './book.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ cmd: 'get_books' })
  getBooks(): Array<Book> {
    return this.appService.getBooks();
  }

  @EventPattern('create_book')
  handleCreateBook(
    @Payload() createBook: CreateBook,
    @Ctx() context: RmqContext,
  ): void {
    console.log(context);
    this.appService.createBook(createBook);
  }
}
