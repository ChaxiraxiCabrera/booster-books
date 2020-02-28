import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { BookAdded } from '../events/BookAdded'
import { BookFinished } from '../events/BookFinished'

@Entity
export class Book {
  public constructor(
    public id: UUID,
    readonly name: string,
    readonly isRead: boolean,
  ) {}

  @Reduces(BookAdded)
  public static projectBookAdded(event: BookAdded, currentBook?: Book): Book {
    return new Book(
      currentBook?.id || event.bookId,
      currentBook?.name || event.name || "No Name",
      currentBook?.isRead || event.isRead || false
    )
  }

  @Reduces(BookFinished)
  public static projectBookFinished(event: BookFinished, currentBook?: Book): Book {
    return new Book(
      currentBook?.id || event.bookId,
      currentBook?.name || event.name || "No Name",
      currentBook?.isRead || event.isRead || true
    )
  }
}
