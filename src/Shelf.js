import BookList from "./BookList"

const BookShelf = props => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <BookList />
        </div>
    )
}

export default BookShelf;