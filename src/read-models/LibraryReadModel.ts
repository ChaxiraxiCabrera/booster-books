import { ReadModel, Projects } from '@boostercloud/framework-core';
import { UUID } from '@boostercloud/framework-types'
import { Book } from '../common/Book';
import { Library } from '../entities/Library';


@ReadModel
export class LibraryReadModel {
    public constructor(
        readonly id: UUID,
        readonly books: Array<Book>,
    ) {}

    @Projects(Library, 'id')
    public static updateWithLibrary(library: Library, oldLibraryReadModel?: LibraryReadModel): LibraryReadModel {
        return new LibraryReadModel(library.id, library.books)
    }
}