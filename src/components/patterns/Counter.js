'use client';
// components/Counter.js

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.increment} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
