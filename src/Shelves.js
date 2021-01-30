import Shelf from "./Shelf";

const Shelves = props => {
    const { shelves, books } = props;
    return (
        <div className="list-books-content">
            <div>
                {
                    shelves.map(shelf => (
                        <Shelf key={shelf.value} title={shelf.name} books={
                            books.filter(book => book.shelf === shelf.value)
                        } shelves={shelves} />
                    ))
                }
            </div>
        </div>
    )
}

export default Shelves;