import { Entity, Reduces } from '@boostercloud/framework-core'
import { UUID } from '@boostercloud/framework-types'
import { LibraryChanged } from '../events/LibraryChanged'
import { Book } from '../common/Book';

@Entity
export class Library {
  public constructor(
    public id: UUID,
    readonly books: Array<Book>,
  ) {}

  @Reduces(LibraryChanged)
  public static projectLibraryChanged(event: LibraryChanged, currentLibrary?: Library): Library {
    if (currentLibrary) {
        // We receive the previous state of the library and modify it according to the event received 
      // We add the new book
      return new Library(
        currentLibrary.id,
        Library.newBook(currentLibrary?.books, event.bookName, event.bookRead)
      )
    } else {
      // If there wasn't any previous Library, we return one with the new book in it
      return new Library(event.libraryId, [{
        bookName: event.bookName,
        bookRead: event.bookRead
      }])
    }
  }


  public static newBook(books: Array<Book>, bookName: string, bookRead: boolean): Array<Book> {
    return books.map(book => {
      if(book.bookName == bookName) {
        return {
          ...book,
          bookRead: bookRead
        }
      }
      return {...book}
    })
  }
}