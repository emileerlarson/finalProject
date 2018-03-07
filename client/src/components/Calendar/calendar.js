import React, { Component } from 'react';
import Calendar from 'react-calendar/dist/entry.nostyle';

class MyApp extends React.Component {

  state = {
    date: new Date(),
    minDetail: 'year',
  }

  onChange = date => this.setState({ date })

  render() {

    const minDetail = this.state.minDetail;

    return (
      <div>
        <Calendar
          onChange={this.onChange}
          minDetail={minDetail}
          value={this.state.date}
        />
      </div>
    );
  }
}
export default Calendar;