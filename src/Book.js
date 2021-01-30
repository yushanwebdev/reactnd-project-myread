import ShelfSelect from "./ShelfSelect";

const Book = props => {
    const { book: { imageLinks: { smallThumbnail }, id, title, authors, shelf }, shelves, updateBookShelf } = props;
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>
                    <ShelfSelect shelves={shelves} bookID={id} bookShelf={shelf} updateBookShelf={updateBookShelf} />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{
                    authors.map(author => (
                        <p key={author}>{author}</p>
                    ))
                }</div>
            </div>
        </li>
    )
}

export default Book;