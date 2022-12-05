import { Body, Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
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
  handleCreateBook(@Body() createBook: CreateBook): void {
    this.appService.createBook(createBook);
  }
}
