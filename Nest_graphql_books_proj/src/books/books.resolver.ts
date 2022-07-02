import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BooksService } from './books.service';
import { Book } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';

@Resolver(() => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Mutation(() => Book)
  async createBook(@Args('createBookInput') createBookInput: CreateBookInput) {
    return this.booksService.createBook(createBookInput);
  }

  @Query(() => [Book], { name: 'books' })
  async findAll() {
    return this.booksService.findAll();
  }

  @Query(() => Book, { name: 'book' })
  async findOne(@Args('id') id: string) {
    return this.booksService.findOne(id);
  }

  @Mutation(() => Book)
  async updateBook(@Args('updateBookInput') updateBookInput: UpdateBookInput) {
    return this.booksService.update(updateBookInput.id, updateBookInput);
  }

  @Mutation(() => Book)
  async removeBook(@Args('id') id: string) {
    return this.booksService.remove(id);
  }
}

