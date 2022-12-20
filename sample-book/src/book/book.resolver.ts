import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { BookService } from './book.service';
import { CreateBook } from './dto/input/createBook.input';
import { UpdateBook } from './dto/input/updateBook.input';
import { MutationTransaction } from './dto/mutationTransaction.dto';
import { Book } from './model/book.model';

@Resolver(() => Book)
export class BookResolver {
  constructor(private readonly bookService: BookService) {}

  @Query(() => [Book], {
    name: 'books',
    nullable: 'items',
    description: 'Get All Books',
  })
  getBooks(): Array<Book> {
    return this.bookService.getBooks();
  }

  @Query(() => Book, {
    name: 'book',
    nullable: true,
    description: 'Get Book By Id',
  })
  getBookById(@Args({ name: 'id', type: () => Int }) bookId: number): Book {
    return this.bookService.getBookById(bookId);
  }

  @Mutation(() => Book, {
    name: 'create_book',
    nullable: false,
    description: 'Create Book',
  })
  createBook(@Args('createBook') createBook: CreateBook): Book {
    return this.bookService.createBook(createBook);
  }

  @Mutation(() => MutationTransaction, {
    name: 'update_book',
    nullable: false,
    description: 'Update Book By Id',
  })
  updateBook(@Args('updateBook') updateBook: UpdateBook): MutationTransaction {
    return this.bookService.updateBookById(updateBook);
  }

  @Mutation(() => MutationTransaction, {
    name: 'delete_book',
    nullable: false,
    description: 'Delete Book By Id',
  })
  deleteBookById(
    @Args({ name: 'id', type: () => Int }) bookId: number,
  ): MutationTransaction {
    return this.bookService.deleteBookById(bookId);
  }
}
