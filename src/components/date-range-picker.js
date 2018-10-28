import React, { Component } from 'react'
import Helmet from 'react-helmet'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

export default class DateRangePicker extends Component {
  state = {
    from: undefined,
    to: undefined
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }

    return (
      <div>
        {this.renderRange()}
        <DayPicker
          className="Selectable"
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          modifiers={modifiers}
        />
        <Helmet>
          <style>{`
  .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .Selectable .DayPicker-Day {
    border-radius: 0 !important;
  }
  .Selectable .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .Selectable .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
`}</style>
        </Helmet>
      </div>
    )
  }

  renderRange = () => {
    const { from, to } = this.state
    if (from && to) {
      return (
        <p>
          Selected dates from {from.toLocaleDateString()} to{' '}
          {to.toLocaleDateString()}
        </p>
      )
    }

    if (from) {
      return <p>Selected date: {from.toLocaleDateString()}</p>
    }

    return <p>Please, select date range</p>
  }

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
    console.log(range)
  }
}
