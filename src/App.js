import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Search from './Search';

const bookShelves = [
  { name: 'Currently Reading', value: 'currentlyReading' },
  { name: 'Want to Read', value: 'wantToRead' },
  { name: 'Read', value: 'read' },
]

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/" render={() => (
            <Home shelves={bookShelves} />
          )}
        />
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp;
