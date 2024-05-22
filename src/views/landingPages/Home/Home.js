import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import { Hero, Highlights, Gallery } from './components';
import {Contact, Travel } from '../../supportingPages';
import SelamImage from '../../../assets/hero.png';

const styles = {
  gridContainer: {
    backgroundImage: `url(${SelamImage})`,
    backgroundSize: 'cover',
    minHeight: 760
  },
};

const Home = () => {
  const theme = useTheme();
  return (
    <Box>
      <Box style={styles.gridContainer}>
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
      {/* <Container>
        <Services />
      </Container> */}
      <Box>
        <Container>
          <Gallery />
        </Container>
      </Box>
      <Box bgcolor={theme.palette.alternate.main}>
        <Container>
          <Contact />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
