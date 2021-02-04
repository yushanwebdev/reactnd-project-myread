import PropTypes from "prop-types";
import ShelfSelect from "./ShelfSelect";

const Book = props => {
    const { book, book: { imageLinks = "https://dl.acm.org/specs/products/acm/releasedAssets/images/cover-default--book.svg", title, authors }, shelves, updateBookShelf } = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})` }}></div>
                    <ShelfSelect 
                        shelves={shelves} 
                        book={book} 
                        updateBookShelf={updateBookShelf} 
                    />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{
                    authors && authors.map(author => (
                        <p key={author}>{author}</p>
                    ))
                }</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
}

export default Book;