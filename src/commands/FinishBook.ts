import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { BookFinished } from '../events/BookFinished'

@Command({
  authorize: 'all'
})
export class FinishBook {
  public constructor(
    readonly bookId: UUID,
    readonly name: string,
    readonly isRead: boolean,
  ) {}

  public handle(register: Register): void {
    register.events( new BookFinished(this.bookId, this.name, this.isRead))
  }
}
