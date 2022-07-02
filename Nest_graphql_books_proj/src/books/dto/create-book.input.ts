import { InputType, Int, Field } from '@nestjs/graphql';
import { IsOptional, Length, MaxLength } from 'class-validator';

@InputType()
export class CreateBookInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  // @Field(() => Int)
  // id: number;

  // @Field({ nullable: true })
  // title?: string;

  // @Field({ nullable: true })
  // author?: string;

  @Field()
  @IsOptional()
  @MaxLength(255)
  title?: string;

  @Field()
  @IsOptional()
  @MaxLength(255)
  author?: string;
}
