import React from 'react';
import { NavLink } from 'react-router-dom';
import { StyledSection, Frame, StyledParagraphText, StyledLink, Button, Image, StyledLinkChild } from './Styling';
import cloudapilogo from './cloudapi.png';

export const Startpage = () => {
  return (
    <Frame>
      <StyledSection>
        <Image src={cloudapilogo} alt="logo" />
        <StyledParagraphText>
          <Button as={NavLink} to="/allclouds">ALL CLOUDS</Button>
        </StyledParagraphText>
        <StyledParagraphText>
          <Button as={NavLink} to="/singlecloud">ONE SINGLE CLOUD</Button>
        </StyledParagraphText>
        <StyledParagraphText>
          <Button as={NavLink} to="/dreamyness">DREAMYNESS OVER 40</Button>
        </StyledParagraphText>
        <StyledParagraphText>
          <Button as={NavLink} to="/technigoapproved">APPROVED BY TECHNIGO?</Button>
        </StyledParagraphText>
        <StyledParagraphText>
          <StyledLink href="https://project-express-api-fx2imjnsnq-lz.a.run.app/" target="_blank" rel="noopener noreferrer">GO TO CLOUD API</StyledLink>
          <StyledLinkChild>- AND DONT ASK WHY!</StyledLinkChild>
        </StyledParagraphText>
      </StyledSection>
    </Frame>
  )
}
