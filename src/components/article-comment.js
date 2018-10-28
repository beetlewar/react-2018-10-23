import React, { Component } from 'react'

export default class ArticleComment extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.comment.user}</h4>
        <section>{this.props.comment.text}</section>
      </div>
    )
  }
}
