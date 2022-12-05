import { Injectable } from '@nestjs/common';
import { CreateBook } from './create-book.dto';

@Injectable()
export class AppService {
  private readonly books: Array<any> = [];

  getHello(): string {
    return 'Hello World!';
  }

  createBook(createBook: CreateBook): void {
    console.log('Book with be Created! - Book Microservice', createBook);
    this.books.push(createBook);
  }
}
