import { Command } from '@boostercloud/framework-core'
import { Register, UUID } from '@boostercloud/framework-types'

@Command({
  authorize: // Specify authorized roles here. Use 'all' to authorize anyone 
})
export class ChangeLibrary {
  public constructor(
    readonly libraryId: UUID,
    readonly bookName: string,
    readonly bookRead: boolean,
  ) {}

  public handle(register: Register): void {
    register.events( /* YOUR EVENT HERE */)
  }
}
