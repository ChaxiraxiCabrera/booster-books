import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'
import { LibraryChanged } from '../events/LibraryChanged'

@Command({
  authorize: 'all'
})
export class ChangeLibrary {
  public constructor(
    readonly libraryId: UUID,
    readonly bookName: string,
    readonly bookRead: boolean,
  ) {}

  public handle(register: Register): void {
    register.events( new LibraryChanged(this.libraryId, this.bookName, this.bookRead))
  }
}
