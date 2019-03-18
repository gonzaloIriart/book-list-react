import React, { Component } from 'react';
import './Book.css';

export default class Book extends Component {
  render() {
     const {name,img,author,description,links} = this.props.info;
    return (
      <div className= "book">
        <img src = {img} alt= "book cover" />
        <h3>{name}</h3>
        <h4>{author}</h4>
        <p>{description}</p>
        <p>{links}</p>
      </div>
    )
  }
}
