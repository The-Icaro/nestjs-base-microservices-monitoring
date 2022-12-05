import { Injectable } from '@nestjs/common';
import { CreateBook } from './create-book.dto';
import { Book } from './book.dto';

@Injectable()
export class AppService {
  private readonly books: Array<Book> = [];

  getHello(): string {
    return 'Hello World!';
  }

  getBooks(): Array<Book> {
    return this.books;
  }

  createBook(createBook: CreateBook): void {
    console.log('Book with be Created! - Book Microservice', createBook);
    this.books.push({ ...createBook, createdDate: new Date() });
  }
}
