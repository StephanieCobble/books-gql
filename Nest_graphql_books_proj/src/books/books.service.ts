import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async createBook(createBookInput: CreateBookInput): Promise<Book> {
    let book = this.booksRepository.create(createBookInput);
    return this.booksRepository.save(book)
  }

  async findAll() {
    return this.booksRepository.find();
    // return [] as Book[];
  }

  async findOne(id:string): Promise<Book> {
    return this.booksRepository.findOne({where: {id: id}});
  }
  // findOne(id: string): Promise<Book> {
  //   return this.booksRepository.findOneBy({ id });
  // }

  update(id: string, updateBookInput: UpdateBookInput) {
    let book: Book = this.booksRepository.create(updateBookInput);
    book.id=id;
    return this.booksRepository.save(book);
  }

  async remove(id: string) {
    let book = this.findOne(id)
    if(book){
      let ret = await this.booksRepository.delete(id)
      if(ret.affected===1){
        return book;
      }
    }
    throw new NotFoundException(`Record not found by ID at ${id}`)
  }
  // async remove(id: string): Promise<void> {
  //   await this.booksRepository.delete(id);
  // }
}
