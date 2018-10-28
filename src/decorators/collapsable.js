import React, { Component } from 'react'

export default (OriginalComponent) =>
  class CollapsableComponentDecorator extends Component {
    state = {
      showComments: false
    }

    render() {
      return (
        <div>
          {this.renderToggleComments()}
          {this.renderComments()}
        </div>
      )
    }

    renderToggleComments = () => {
      const toggleText = this.state.showComments
        ? 'Hide comments'
        : 'Show comments'

      return <button onClick={this.toggleShowComments}>{toggleText}</button>
    }

    toggleShowComments = () => {
      this.setState({ showComments: !this.state.showComments })
    }

    renderComments() {
      if (!this.state.showComments) return null

      return <OriginalComponent {...this.props} />
    }
  }
