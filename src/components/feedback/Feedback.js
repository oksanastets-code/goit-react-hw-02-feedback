import React, { Component } from 'react';
import ControlItem from './Controls';
import initialFeedbacks from './feedbacks.json';
// import PropTypes from 'prop-types';
// import {} from './Feedback.styled';

class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    //   feedbacks: initialFeedbacks
  };
  // Public method
  // handle = feedbackId => {
  // this.setState(prevState => ({
  //   feedbacks: prevState.feedbacks.number + 1,
  // }));
  // };
  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };
  render() {
    return (
      <div>
        <div>
          <h3>Please leave feedback</h3>

          {/* <ControlItem buttons={ initialFeedbacks} onIncrement={ this.handle}/> */}

          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>

          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total:</p>
          <p>Positive feedback: %</p>
        </div>
      </div>
    );
  }
}

// Feedback.propTypes = {

// };
export default Feedback;
