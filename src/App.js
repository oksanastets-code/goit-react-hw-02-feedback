import { Component } from 'react';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import Section from './components/Section';

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

  countTotalFeedback = () => {
    const TotalFeedback = Object.values(this.state).reduce(
      (acc, number) => acc + number,
      0,
    );
    return TotalFeedback;
  };

  // countPositiveFeedbackPercentage = (state, countTotalFeedback) => {
  //   const PositiveFeedbackPercentage = (
  //     (Object.values(state)[0] / countTotalFeedback) *
  //     100
  //   ).toFixed(0);
  //   return PositiveFeedbackPercentage;
  // };
  render() {
    const arrayOfKeys = Object.keys(this.state);
    const voices = Object.values(this.state);
    const TotalFeedback = this.countTotalFeedback();

    const numberOfPositiveFeedbacks = voices[0];
    const countPositiveFeedbackPercentage = (
      (numberOfPositiveFeedbacks / TotalFeedback) *
      100
    ).toFixed(0);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={arrayOfKeys}
            onIncrement={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {TotalFeedback ? (
            <Statistics
              options={this.state}
              total={TotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification />
          )}
        </Section>
      </>
    );
  }
}

export default App;
