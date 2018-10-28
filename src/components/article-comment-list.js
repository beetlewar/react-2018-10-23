import React, { Component } from 'react'
import ArticleComment from './article-comment'
import collapsable from '../decorators/collapsable'

class ArticleCommentList extends Component {
  render() {
    return <ul>{this.items}</ul>
  }

  get items() {
    if (!this.props.comments) return null

    return this.props.comments.map((comment) => (
      <li key={comment.id}>
        <ArticleComment comment={comment} />
      </li>
    ))
  }
}

export default collapsable(ArticleCommentList)
