import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import {
  // Hero,
  Process,
  WhatWeDo,
} from './components';

const Services = ({ themeMode = 'light' }) => {

  return (
    <Box>
      {/* <Container>
        <Hero />
      </Container> */}
      <Container>
        <WhatWeDo />
      </Container>
      <Container>
        <Process themeMode={themeMode} />
      </Container>
    </Box>
  );
};

Services.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Services;
