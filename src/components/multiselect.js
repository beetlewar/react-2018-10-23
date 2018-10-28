import React, { Component } from 'react'
import Select from 'react-select'

export default class Multiselect extends Component {
  state = {
    selectedOption: null
  }

  render() {
    return (
      <Select
        options={this.optionsForSelect}
        onChange={this.handleSelectChange}
        value={this.state.selectedOption}
        isMulti
      />
    )
  }

  get optionsForSelect() {
    const articles = this.props.articles

    return articles.map((item) => ({
      value: item.id,
      label: item.title
    }))
  }

  handleSelectChange = (selectedOption) => {
    this.setState({ selectedOption })
    this.props.articlesSelectionChanged(
      selectedOption.map((item) => item.value)
    )
  }
}
