import React, { Component } from 'react'
import Book from '../Book/Book';
import booksData from './data';

export default class BookList extends Component {
    state = {
        books:booksData
    }

  render() {
    return (
      <div>
          <h2>BookList</h2>
          {this.state.books.map(item=>(
            <Book key = {item.id} info={item}/>
            ))}
       
      </div>
    )
  }
}
