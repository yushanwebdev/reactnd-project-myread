import React from 'react';
import './App.css';
import Home from './Home';

const bookShelves = [
  {name: 'Currently Reading', value: 'currentlyReading'},
  {name: 'Want to Read', value: 'wantToRead'},
  {name: 'Read', value: 'read'},
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
