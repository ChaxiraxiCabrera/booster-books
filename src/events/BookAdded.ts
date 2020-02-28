import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class BookAdded {
  public constructor(
    readonly bookId: UUID,
    readonly name: string,
    readonly isRead: boolean,
  ) {}

  public entityID(): UUID {
    return this.bookId
  }
}
