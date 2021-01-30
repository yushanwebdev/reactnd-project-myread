import Book from "./Book"

const BookList = props => {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                props.books.map(book => (
                    <Book key={book.id} image={book.smallThumbnail} title={book.title} authors={book.authors} shelves={shelves} />
                ))
            </ol>
        </div>
    )
}

export default BookList;