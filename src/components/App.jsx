import React, { Component } from 'react';
import { Wrapper } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = comment => {
    console.log(comment);
    // if (e.target.nodeName !== 'BUTTON') {
    //   return;
    // }

    // const { name } = e.target;

    this.setState(prevState => {
      return { [comment]: prevState[comment] + 1 };
    });
    // this.countTotalFeedback();
    // this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <Wrapper className="Reviews">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        {total === 0 ? (
          <Notification message={'There is no feedback'} />
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          </Section>
        )}
      </Wrapper>
    );
  }
}
