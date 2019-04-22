import React from 'react';

import Circle from './Circle';
import Wrapper from './Wrapper';
import Inner from './Inner';

const LoadingIndicator = ({ paddingTop }) => paddingTop ? (
  <Wrapper className="m-auto relative" paddingTop={paddingTop}>
    <div className="absolute w-full h-full pin-t pin-l flex items-center justify-center">
      <Inner className="relative">
        <Circle />
        <Circle rotate={30} delay={-1.1} />
        <Circle rotate={60} delay={-1} />
        <Circle rotate={90} delay={-0.9} />
        <Circle rotate={120} delay={-0.8} />
        <Circle rotate={150} delay={-0.7} />
        <Circle rotate={180} delay={-0.6} />
        <Circle rotate={210} delay={-0.5} />
        <Circle rotate={240} delay={-0.4} />
        <Circle rotate={270} delay={-0.3} />
        <Circle rotate={300} delay={-0.2} />
        <Circle rotate={330} delay={-0.1} />
      </Inner>
    </div>
  </Wrapper>
) : (
  <Inner className="m-auto relative">
    <Circle />
    <Circle rotate={30} delay={-1.1} />
    <Circle rotate={60} delay={-1} />
    <Circle rotate={90} delay={-0.9} />
    <Circle rotate={120} delay={-0.8} />
    <Circle rotate={150} delay={-0.7} />
    <Circle rotate={180} delay={-0.6} />
    <Circle rotate={210} delay={-0.5} />
    <Circle rotate={240} delay={-0.4} />
    <Circle rotate={270} delay={-0.3} />
    <Circle rotate={300} delay={-0.2} />
    <Circle rotate={330} delay={-0.1} />
  </Inner>
);

export default LoadingIndicator;
