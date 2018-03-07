import React, { Component } from 'react';
import Calendar from 'react-calendar';

class App extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <h1>HEllO WORLD</h1>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default App;