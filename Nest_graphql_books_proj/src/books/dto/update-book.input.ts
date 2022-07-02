import { CreateBookInput } from './create-book.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  // @Field(() => Int)
  // id: number;

  @Field()
  @IsOptional()
  @MaxLength(255)
  id: string;

  @Field()
  @IsOptional()
  @MaxLength(255)
  title?: string;

  @Field()
  @IsOptional()
  @MaxLength(255)
  author?: string;
}
