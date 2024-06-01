import React, { useState } from 'react';
import { useEffect } from 'react';
import { Stepper, Step } from 'react-form-stepper';

export default function ProgressBar() {
  console.log(localStorage.getItem('step'));

  return (
    <Stepper
      connectorStateColors
      connectorStyleConfig={{
        size: 2,
        activeColor: '#303f9f',
        completedColor: '#303f9f',
      }}
      activeStep={parseInt(localStorage.getItem('step'))}
      styleConfig={{
        size: 50,
        activeBgColor: '#303f9f',
        completedBgColor: '#303f9f',
        inactiveTextColor: '#000',
      }}
    >
      <Step label="General Reasoning" />
      <Step label="Numerical Calculation" />
      {/* <Step label="Handwriting" /> */}
    </Stepper>
  );
}
