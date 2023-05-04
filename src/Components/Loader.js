import React from 'react';
import { StyledSection, Frame, StyledTextBold } from './Styling';

export const Loader = () => {
  return (
    <Frame>
      <StyledSection>
        <StyledTextBold>LOADING...</StyledTextBold>
      </StyledSection>
    </Frame>
  )
}