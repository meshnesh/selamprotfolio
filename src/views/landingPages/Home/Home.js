import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Footer, Hero, Highlights } from './components';
import { About,Contact,   Services } from '../../supportingPages';

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
          <About />
        </Container>
      </Box>
      <Container>
        <Footer />
      </Container>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Services />
        </Container>
      </Box>
      <Container>
        <Contact />
      </Container>
    </Box>
  );
};

export default Home;
