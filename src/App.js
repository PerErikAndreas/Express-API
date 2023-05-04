import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Startpage } from 'Components/Startpage';
import { All } from 'Components/All';
import { Single } from 'Components/Single';
import { Approved } from 'Components/Approved';
import { Dreamyness } from 'Components/Dreamyness';
import styled from 'styled-components';

const StyledSection = styled.div`
  background-color: transperent;
`;

export const App = () => {
  return (
    <StyledSection>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Startpage />} />
          <Route path="/allclouds" element={<All />} />
          <Route path="/singlecloud" element={<Single />} />
          <Route path="/dreamyness" element={<Dreamyness />} />
          <Route path="/technigoapproved" element={<Approved />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </StyledSection>
  );
}