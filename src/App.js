import React from 'react';
import './App.css';
import Home from './Home';

const bookShelves = [
  {id: 'currentlyReading', name: 'Currently Reading'},
  {id: 'wantToRead', name: 'Want to Read'},
  {id: 'read', name: 'Read'},
]

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Home shelves={bookShelves} />
      </div>
    )
  }
}

export default BooksApp;
