import React, { Component } from 'react';

export default class Book extends Component {
  render() {
     const {name,author,description,links} = this.props.info;
    return (
      <div>
        <h3>{name}</h3>
        <h4>{author}</h4>
        <p>{description}</p>
        <p>{links}</p>
      </div>
    )
  }
}
