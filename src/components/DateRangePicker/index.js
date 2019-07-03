/* eslint-disable */
import React, { Component } from 'react'
import { Calendar } from 'react-native-calendars'

const XDate = require('xdate')

export default class DateRangePicker extends Component {
  state = { isFromDatePicked: false, isToDatePicked: false, markedDates: {} }

  componentDidMount() {
    this.setupInitialRange()
  }

  onDayPress = day => {
    if (
      !this.state.isFromDatePicked ||
      (this.state.isFromDatePicked && this.state.isToDatePicked)
    ) {
      this.setupStartMarker(day)
    } else if (!this.state.isToDatePicked) {
      const markedDates = { ...this.state.markedDates }
      const [mMarkedDates, range] = this.setupMarkedDates(
        this.state.fromDate,
        day.dateString,
        markedDates
      )
      if (range >= 0) {
        this.setState({ isFromDatePicked: true, isToDatePicked: true, markedDates: mMarkedDates })
        const endYear = new Date(day.dateString).getFullYear()
        const endMonth = new Date(day.dateString).getMonth()

        const startYear = new Date(this.state.fromDate).getFullYear()
        const startMonth = new Date(this.state.fromDate).getMonth()
        this.props.onSuccess(`${startMonth}-${startYear}`, `${endMonth}-${endYear}`)
      } else {
        this.setupStartMarker(day)
      }
    }
  }

  setupStartMarker = day => {
    const markedDates = {
      [day.dateString]: {
        startingDay: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor
      }
    }
    this.setState({
      isFromDatePicked: true,
      isToDatePicked: false,
      fromDate: day.dateString,
      markedDates
    })
  }

  setupMarkedDates = (fromDate, toDate, markedDates) => {
    const mFromDate = new XDate(fromDate)
    const mToDate = new XDate(toDate)
    const range = mFromDate.diffDays(mToDate)
    if (range >= 0) {
      if (range == 0) {
        markedDates = {
          [toDate]: { color: this.props.theme.markColor, textColor: this.props.theme.markTextColor }
        }
      } else {
        for (let i = 1; i <= range; i++) {
          const tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd')
          if (i < range) {
            markedDates[tempDate] = {
              color: this.props.theme.markColor,
              textColor: this.props.theme.markTextColor
            }
          } else {
            markedDates[tempDate] = {
              endingDay: true,
              color: this.props.theme.markColor,
              textColor: this.props.theme.markTextColor
            }
          }
        }
      }
    }
    return [markedDates, range]
  }

  setupInitialRange = () => {
    if (!this.props.initialRange) return
    const [fromDate, toDate] = this.props.initialRange
    const markedDates = {
      [fromDate]: {
        startingDay: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor
      }
    }
    const [mMarkedDates] = this.setupMarkedDates(fromDate, toDate, markedDates)
    this.setState({ markedDates: mMarkedDates, fromDate })
  }

  render() {
    return (
      <Calendar
        {...this.props}
        markingType="period"
        current={this.state.fromDate}
        markedDates={this.state.markedDates}
        onDayPress={day => {
          this.onDayPress(day)
        }}
      />
    )
  }
}

DateRangePicker.defaultProps = {
  theme: { markColor: '#00adf5', markTextColor: '#ffffff' }
}
