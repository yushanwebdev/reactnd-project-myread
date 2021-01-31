import PropTypes from 'prop-types';
import BookList from "./BookList";

const BookShelf = props => {
    const { shelf: {name, value}, books, shelves, updateBookShelf } = props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{name}</h2>
            <BookList
                books={
                    books.filter(book => book.shelf === value)
                }
                shelves={shelves}
                updateBookShelf={updateBookShelf}
            />
        </div>
    )
}

BookShelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array,
    shelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default BookShelf;