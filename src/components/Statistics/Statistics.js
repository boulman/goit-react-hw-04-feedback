import { Stat } from './Statistics.styled';
import React from 'react';

export function Statistics({ good, bad, neutral, total, positivePercentage }) {
  return (
    <div>
      <Stat>Good: {good}</Stat>
      <Stat>Neutral: {neutral}</Stat>
      <Stat>Bad: {bad}</Stat>
      <Stat>Total: {total}</Stat>
      <Stat>Positive feedback: {positivePercentage}%</Stat>
    </div>
  );
}
