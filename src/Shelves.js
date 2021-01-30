import Shelf from "./Shelf";

const Shelves = props => {
    const { shelves, books, updateBookShelf } = props;
    return (
        <div className="list-books-content">
            <div>
                {
                    shelves.map(shelf => (
                        <Shelf key={shelf.value} title={shelf.name} value={shelf.value} books={books} shelves={shelves} updateBookShelf={updateBookShelf} />
                    ))
                }
            </div>
        </div>
    )
}

export default Shelves;