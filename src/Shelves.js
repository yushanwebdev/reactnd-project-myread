import PropTypes from 'prop-types';
import Shelf from "./Shelf";

const Shelves = props => {
    const { shelves, books, updateBookShelf } = props;
    return (
        <div className="list-books-content">
            <div>
                {
                    shelves.map(shelf => (
                        <Shelf 
                            key={shelf.value}
                            shelf={shelf} 
                            books={books} 
                            shelves={shelves} 
                            updateBookShelf={updateBookShelf} 
                        />
                    ))
                }
            </div>
        </div>
    )
}

Shelves.propTypes = {
    shelves: PropTypes.array.isRequired,
    books: PropTypes.array,
    updateBookShelf: PropTypes.func.isRequired
}

export default Shelves;