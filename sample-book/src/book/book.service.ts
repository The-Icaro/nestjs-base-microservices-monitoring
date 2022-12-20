import { Injectable } from '@nestjs/common';
import { CreateBook } from './dto/input/createBook.input';
import { UpdateBook } from './dto/input/updateBook.input';
import { MutationTransaction } from './dto/mutationTransaction.dto';
import { Book } from './model/book.model';

@Injectable()
export class BookService {
  private books: Array<Book> = [];

  public createBook(createBook: CreateBook): Book {
    const book: Book = {
      id: this.books.length + 1,
      ...createBook,
    };

    this.books.push(book);

    return book;
  }

  public updateBookById(updateBook: UpdateBook): MutationTransaction {
    const mutationTransaction: MutationTransaction = {
      indentifier: updateBook.id,
      rowsAffected: 0,
    };

    const book = this.books.find((book) => book.id === updateBook.id);

    if (!book) return mutationTransaction;

    Object.assign(book, updateBook);
    mutationTransaction.rowsAffected = 1;

    return mutationTransaction;
  }

  public getBookById(bookId: number): Book {
    return this.books.find((book) => book.id === bookId);
  }

  public getBooks(): Array<Book> {
    return this.books;
  }

  public deleteBookById(bookId: number): MutationTransaction {
    const mutationTransaction: MutationTransaction = {
      indentifier: bookId,
      rowsAffected: 0,
    };

    const bookIndex = this.books.findIndex((book) => book.id === bookId);

    if (bookIndex === -1) return mutationTransaction;

    this.books.splice(bookIndex);
    mutationTransaction.rowsAffected = 1;

    return mutationTransaction;
  }
}
