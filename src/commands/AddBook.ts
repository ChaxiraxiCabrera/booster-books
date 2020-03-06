import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { BookAdded } from '../events/BookAdded'
import { User } from '../roles';

@Command({
  authorize: [User]
})
export class AddBook {
  public constructor(
    readonly bookId: UUID,
    readonly name: string,
    readonly isRead: boolean,
  ) {}

  public handle(register: Register): void {
    register.events( new BookAdded(this.bookId, this.name, this.isRead))
  }
}
