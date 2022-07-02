import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional } from 'class-validator';

@ObjectType()
@Entity()
export class Book {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;

  @Field( { nullable: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field({ nullable: true })
  @Column()
  @IsOptional()
  title?: string;

  @Field({ nullable: true })
  @Column()
  @IsOptional()
  author?: string;

}
