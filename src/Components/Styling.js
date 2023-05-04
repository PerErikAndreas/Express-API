import styled from 'styled-components';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15%;
`;

export const StyledSection = styled.div`
  background-color: transperent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const StyledTextBold = styled.p`
 color: white;
 font-size: 25px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 margin: 0;
`;

export const StyledParagraphText = styled.p`
 color: white;
 font-size: 25px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 display: flex;
 flex-direction: column;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 margin: 10px;
`;

export const StyledLink = styled.a`
display: flex;
 color: white;
 font-size: 15px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
 text-decoration: white wavy underline;
  text-decoration-skip-ink: none;
`;

export const StyledLinkChild = styled.a`
display: flex;
 color: white;
 font-size: 10px;
 font-family: Futura;
 text-decoration: none;
 font-weight: bold;
`;

export const Button = styled.button`
  border: none;
  background: #ffffff;
  color: #182F5D;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
  padding: 10px 25px 10px 25px;
  text-decoration: none;

  &:hover {
    background-color: #25467dff;
    color: #ffffff;
  }
`;

export const Image = styled.img`
  width: 164px; 
  object-fit: cover;
  `;

