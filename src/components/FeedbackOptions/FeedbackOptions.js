import { Btn, BtnContainer } from './FeedbackOptions.styled';
import React from 'react';

export function FeedbackOptions({ options, onFeedback }) {
  return (
    <BtnContainer>
      {options.map(opt => (
        <Btn key={opt} type="button" onClick={() => onFeedback(opt)}>
          {opt[0].toUpperCase() + opt.slice(1)}
        </Btn>
      ))}
    </BtnContainer>
  );
}
