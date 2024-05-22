import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
// import Divider from '@mui/material/Divider';
import Container from 'common/Container';
// import { Headline, Numbers, Story } from './components';
import { Headline } from './components';

const About = () => {
  return (
    <Box>
      <Container>
        <Headline />
      </Container>
    </Box>
  );
};

About.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default About;
