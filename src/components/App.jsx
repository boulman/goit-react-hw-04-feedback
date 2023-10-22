import React, { useState } from 'react';
import { Container } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = statName => {
    switch (statName) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return null;
    }
  };

  const countTotal = () => {
    return good + neutral + bad;
  };

  const countPositivePercentage = () => {
    return ((good / countTotal()) * 100).toFixed(2);
  };

  return (
    <Container>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onFeedback={handleFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotal() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal()}
            positivePercentage={countPositivePercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}
