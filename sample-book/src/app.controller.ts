import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern } from '@nestjs/microservices';
import { CreateBook } from './create-book.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @EventPattern('create_book')
  handleCreateBook(@Body() createBook: CreateBook): void {
    this.appService.createBook(createBook);
  }
}
