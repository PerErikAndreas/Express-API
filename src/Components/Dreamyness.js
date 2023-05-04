import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Loader } from './Loader';
import { StyledSection, Frame, StyledParagraphText, Button } from './Styling';

export const Dreamyness = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    fetch('https://project-express-api-fx2imjnsnq-lz.a.run.app/allclouds/dreamyness/40')
      .then((res) => res.json())
      .then((data) => {
        setList(data.body.fluff);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <Frame>
      <StyledSection>
        <StyledParagraphText>
          <Button as={NavLink} to="/">BACK</Button>
        </StyledParagraphText>
        {list.map((fluff) => (
        // eslint-disable-next-line max-len
          <StyledParagraphText key={fluff.id}>{fluff.name} Scored: {fluff.dreamyness}</StyledParagraphText>
        ))}
      </StyledSection>
    </Frame>
  );
};
