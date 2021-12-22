import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

// import Feedback from './components/feedback/Feedback';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Public method
  onLeaveFeedback = feedbackId => {
    this.setState(prevState => ({
      [feedbackId]: prevState[feedbackId] + 1,
    }));
  };

  render() {
    const voices = Object.values(this.state);
    const countTotalFeedback = voices.reduce((acc, number) => acc + number, 0);

    const numberOfPositiveFeedbacks = voices[0];
    const countPositiveFeedbackPercentage = (
      (numberOfPositiveFeedbacks / countTotalFeedback) *
      100
    ).toFixed(0);

    return (
      <>
        <div>
          <h3>Please leave feedback</h3>
          <FeedbackOptions
            options={this.state}
            onIncrement={this.onLeaveFeedback}
          />
        </div>
        <div>
          <h2>Statistics</h2>
          <Statistics
            options={this.state}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </div>
      </>
    );
  }
}

export default App;
