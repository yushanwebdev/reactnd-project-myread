import Shelf from "./Shelf"

const BookShelves = props => {
    return (
        <div className="list-books-content">
            <div>
                {
                    props.shelves.map(shelf => (
                        <Shelf key={shelf.value} title={shelf.name} books={books} shelves={shelves} />
                    ))
                }
            </div>
        </div>
    )
}

export default BookShelves;