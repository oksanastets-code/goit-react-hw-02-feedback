import { Component } from 'react';
import ControlItem from './Controls';
import CountFeedback from './FeedbackNumbers';

// import PropTypes from 'prop-types';
// import {} from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Public method
  handle = feedbackId => {
    this.setState(prevState => ({
      [feedbackId]: prevState[feedbackId] + 1,
    }));
  };

  render() {
    const voices = Object.values(this.state);
    console.log(voices);
    const countTotalFeedback = voices.reduce((acc, number) => acc + number, 0);
    const numberOfGoodFeedbacks = voices[0];
    const countPositiveFeedbackPercentage = (
      (numberOfGoodFeedbacks / countTotalFeedback) *
      100
    ).toFixed(0);
    return (
      <>
        <div>
          <h3>Please leave feedback</h3>
          <ControlItem options={this.state} onIncrement={this.handle} />
        </div>
        <div>
          <h2>Statistics</h2>
          <CountFeedback options={this.state} />
          <p>Total: {countTotalFeedback}</p>
          <p>Positive feedback: {countPositiveFeedbackPercentage} %</p>
        </div>
      </>
    );
  }
}

// Feedback.propTypes = {

// };
export default Feedback;
