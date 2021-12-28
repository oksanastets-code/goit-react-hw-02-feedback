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

  countPositiveFeedbackPercentage = () => {
    const voices = Object.values(this.state);
    const PositiveFeedbackPercentage = (
      (voices[0] / this.countTotalFeedback()) *
      100
    ).toFixed(0);
    return PositiveFeedbackPercentage;
  };

  render() {
    const arrayOfKeys = Object.keys(this.state);
    const TotalFeedback = this.countTotalFeedback();
    const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
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
              positivePercentage={PositiveFeedbackPercentage}
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
