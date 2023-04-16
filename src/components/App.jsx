// import React, { Component } from 'react';
import { useState } from 'react';
import { Wrapper } from './App.styled';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function App() {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = comment => {
    // console.log(comment);
    switch (comment) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;

      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;

      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }

    // this.setState(prevState => {
    //   return { [comment]: prevState[comment] + 1 };
    // });
  };

  // countTotalFeedback = () => {
  //   const values = Object.values(this.state);
  //   return values.reduce((acc, value) => acc + value, 0);
  // };

  // countPositiveFeedbackPercentage = () => {
  //   const { good } = this.state;

  //   return Math.round((good / this.countTotalFeedback()) * 100);
  // };

  const total = good + neutral + bad;

  const positiveFeedback = Math.round((good / total) * 100);

  const allState = {
    good,
    neutral,
    bad,
  };

  // render() {
  //   const { good, neutral, bad } = this.state;
  //   const total = this.countTotalFeedback();
  //   const positiveFeedback = this.countPositiveFeedbackPercentage();

  return (
    <Wrapper className="Reviews">
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(allState)}
          onLeaveFeedback={handleClick}
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
