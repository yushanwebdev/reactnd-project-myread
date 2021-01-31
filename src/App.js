import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import Home from './Home';
import Search from './Search';

const bookShelves = [
  { name: 'Currently Reading', value: 'currentlyReading' },
  { name: 'Want to Read', value: 'wantToRead' },
  { name: 'Read', value: 'read' },
]

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    searchBooks: []
  }

  getAllBooks = () => {
    return BooksAPI.getAll()
  }

  getFilteredBooks = (query) => {
    return BooksAPI.search(query);
  }

  updateBookList = (selectedBook, shelf, books) => {
      let bookList;
      selectedBook.shelf = shelf;
      bookList = books.length && [...new Set([...books, selectedBook])];
      return bookList;
  }

  loadAllBooks = () => {
    if (!this.state.allBooks.length)
      this.getAllBooks()
        .then(books => {
          this.setState(prevState => ({
            allBooks: books
          }))
        })
  }

  loadSearchBooks = (query) => {
    this.getAllBooks()
      .then(allBooks => {
        this.getFilteredBooks(query)
          .then(filteredBooks => {
            if(filteredBooks && !filteredBooks.error)
            this.setState(prevState => ({
              allBooks: allBooks,
              searchBooks: filteredBooks.map(book => {
                const sameBook = allBooks.find(allBook => allBook.id === book.id);
                return sameBook ? sameBook : book;
              })
            }))
          })
      })
  }

  updateBookShelf = (book, shelf) => {
    this.setState(prevState => ({
      allBooks: this.updateBookList(book, shelf, prevState.allBooks),
      searchBooks: this.updateBookList(book, shelf, prevState.searchBooks)
    }));
    BooksAPI.update(book, shelf)
      .then(result => {
        console.log("successfully added");
      })
  }

  render() {
    const { allBooks, searchBooks } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Home shelves={bookShelves} books={allBooks} loadAllBooks={this.loadAllBooks} updateBookShelf={this.updateBookShelf} />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search shelves={bookShelves} books={searchBooks} loadSearchBooks={this.loadSearchBooks} updateBookShelf={this.updateBookShelf} />
          )}
        />
      </div>
    )
  }
}

export default BooksApp;
