import { ReadModel, Projects } from '@boostercloud/framework-core';
import { UUID } from '@boostercloud/framework-types';
import { Book } from '../entities/Book';

@ReadModel
export class BookReadModel {
  public constructor(
    readonly id: UUID,
    readonly name: string,
    readonly isRead: boolean,
  ) {}

  @Projects(Book, 'id')
  public static updateWithLibrary(book: Book, oldBookReadModel?: BookReadModel): BookReadModel {
    return new BookReadModel(book.id, book.name, book.isRead)
  }
}