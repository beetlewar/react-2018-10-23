import React, { Component } from 'react'
import ArticleList from './article-list'
import articles from '../fixtures'
import UserForm from './user-form'
import DateRangePicker from './date-range-picker'
import Multiselect from './multiselect'

export default class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Multiselect
          articles={articles}
          articlesSelectionChanged={this.handleArticlesSelectionChanged}
        />
        <DateRangePicker />
        <ArticleList items={articles} />
      </div>
    )
  }

  handleArticlesSelectionChanged = (ids) => {
    console.log(`Selected article ids: ${ids}.`)
  }
}
