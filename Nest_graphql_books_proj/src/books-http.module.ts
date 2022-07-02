
import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { BooksService } from './books/books.service';


@Module({
  imports: [BooksModule],
  providers: [BooksService]
})
export class UserHttpModule {}