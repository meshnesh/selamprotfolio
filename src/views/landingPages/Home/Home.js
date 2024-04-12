import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Hero, Highlights, Gallery } from './components';
import {Contact, Services, Travel } from '../../supportingPages';

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box bgcolor={theme.palette.alternate.main} position={'relative'}>
        <Container position="relative" zIndex={2}>
          <Hero />
        </Container>
      </Box>
      <Container>
        <Highlights />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Travel />
        </Container>
      </Box>
      <Container>
        <Services />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Gallery />
        </Container>
      </Box>
      <Container>
        <Contact />
      </Container>
    </Box>
  );
};

export default Home;
