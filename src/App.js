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

  getSearchBooksList = async (query, allBooks) => {
    if (query !== "") {
      const filteredBooks = await this.getFilteredBooks(query);
      if (filteredBooks && !filteredBooks.error)
        this.setState(prevState => ({
          allBooks: allBooks,
          searchBooks: filteredBooks.map(book => {
            const sameBook = allBooks.find(allBook => allBook.id === book.id);
            return sameBook ? sameBook : book;
          }),
          searchStatus: true
        }))
      else if (filteredBooks.error)
        this.setState(prevState => ({
          searchBooks: [],
          searchStatus: false
        }))
    } else {
      this.setState(prevState => ({
        searchBooks: [],
        searchStatus: true
      }))
    }
  }

  loadAllBooks = async () => {
    this.setState(prevState => ({
      searchBooks: []
    }))
    if (!this.state.allBooks.length) {
      const allBooks = await this.getAllBooks();
      this.setState(prevState => ({
        allBooks: allBooks
      }))
    }
  }

  loadSearchBooks = async (query) => {
    if (this.state.allBooks.length) {
      this.getSearchBooksList(query, this.state.allBooks);
    } else {
      const allBooks = await this.getAllBooks();
      this.getSearchBooksList(query, allBooks);
    }
  }

  updateBookShelf = async (book, shelf) => {
    this.setState(prevState => ({
      allBooks: this.updateBookList(book, shelf, prevState.allBooks),
      searchBooks: this.updateBookList(book, shelf, prevState.searchBooks),
      searchStatus: true
    }));
    BooksAPI.update(book, shelf);
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
        <Route exact path="/">
          <Home
            shelves={bookShelves}
            books={allBooks}
            loadAllBooks={this.loadAllBooks}
            updateBookShelf={this.updateBookShelf}
          />
        </Route>
        <Route path="/search">
          <Search
            shelves={bookShelves}
            books={searchBooks}
            searchStatus={searchStatus}
            loadSearchBooks={this.loadSearchBooks}
            updateBookShelf={this.updateBookShelf}
          />
        </Route>
      </div>
    )
  }
}

export default BooksApp;
