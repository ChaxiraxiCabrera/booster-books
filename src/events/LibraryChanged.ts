import { Event } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'

@Event
export class LibraryChanged {
  public constructor(
    readonly libraryId: UUID,
    readonly bookName: string,
    readonly bookRead: boolean,
  ) {}

  public entityID(): UUID {
    return this.libraryId;
  }
}
