import React from 'react';
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
      {/* <Container maxWidth={'800px !important'} paddingBottom={'0 !important'}>
        <Numbers />
        <Container>
          <Divider />
        </Container>
      </Container>
      <Container paddingY={'0 !important'}>
        <Story />
      </Container> */}
    </Box>
  );
};

export default About;
