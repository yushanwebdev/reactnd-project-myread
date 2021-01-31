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
    searchBooks: [],
    searchStatus: true
  }

  getAllBooks = () => {
    return BooksAPI.getAll()
  }

  getFilteredBooks = (query) => {
    return BooksAPI.search(query);
  }

  getSearchBooksList = (query, allBooks) => {
    if (query !== "")
      this.getFilteredBooks(query)
        .then(filteredBooks => {
          if (filteredBooks && !filteredBooks.error)
            this.setState(prevState => ({
              allBooks: allBooks,
              searchBooks: filteredBooks.map(book => {
                const sameBook = allBooks.find(allBook => allBook.id === book.id);
                return sameBook ? sameBook : book;
              }),
              searchStatus: true
            }))
          else if(filteredBooks.error)
            this.setState(prevState => ({
              searchStatus: false
            }))
        })
    else
      this.setState(prevState => ({
        searchBooks: [],
        searchStatus: true
      }))
  }

  loadAllBooks = () => {
    this.setState(prevState => ({
      searchBooks: []
    }))
    if (!this.state.allBooks.length)
      this.getAllBooks()
        .then(books => {
          this.setState(prevState => ({
            allBooks: books
          }))
        })
  }

  loadSearchBooks = (query) => {
    if (this.state.allBooks.length)
      this.getSearchBooksList(query, this.state.allBooks);
    else
      this.getAllBooks()
        .then(allBooks => {
          this.getSearchBooksList(query, allBooks);
        })
  }

  updateBookShelf = (book, shelf) => {
    this.setState(prevState => ({
      allBooks: this.updateBookList(book, shelf, prevState.allBooks),
      searchBooks: this.updateBookList(book, shelf, prevState.searchBooks),
      searchStatus: true
    }));
    BooksAPI.update(book, shelf)
      .then(result => {
        console.log("successfully added");
      })
  }

  updateBookList = (selectedBook, shelf, books) => {
    let bookList;
    selectedBook.shelf = shelf;
    bookList = books && books.length ? [...new Set([...books, selectedBook])] : [];
    return bookList;
  }

  render() {
    const { allBooks, searchBooks, searchStatus } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Home
              shelves={bookShelves}
              books={allBooks}
              loadAllBooks={this.loadAllBooks}
              updateBookShelf={this.updateBookShelf}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              shelves={bookShelves}
              books={searchBooks}
              searchStatus={searchStatus}
              loadSearchBooks={this.loadSearchBooks}
              updateBookShelf={this.updateBookShelf}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp;
