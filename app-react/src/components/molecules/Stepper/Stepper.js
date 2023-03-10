import React from 'react';
import { StepperLine, StepperWrapper, StepperButton, StepperValue } from './Stepper-styled';
import { Label } from 'components/atoms/Label/Label';
import PropTypes from 'prop-types';

const Stepper = ({ title, value, updateValue, minValue }) => {
  const increaseValue = (e) => {
    e.preventDefault();
    updateValue(value + 1);
  };

  const decreaseValue = (e) => {
    e.preventDefault();
    updateValue(value - 1);
  };

  return (
    <StepperLine>
      <Label>{title}</Label>
      <StepperWrapper>
        <StepperButton disabled={minValue === value} onClick={decreaseValue}>
          -
        </StepperButton>
        <StepperValue>{value}</StepperValue>
        <StepperButton onClick={increaseValue}>+</StepperButton>
      </StepperWrapper>
    </StepperLine>
  );
};

Stepper.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  updateValue: PropTypes.func.isRequired,
};

export default Stepper;
