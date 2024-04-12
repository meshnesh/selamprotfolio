import React from 'react';
import PropTypes from 'prop-types';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import { Form } from './components';
import Container from 'common/Container';

const Contact = () => {
  // const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  return (
    <Box>
      {/* <Container>
        <Grid container spacing={isMd ? 8 : 4}>
          <Grid item xs={12} md={6}>
            <Map themeMode={themeMode} />
          </Grid>
          <Grid item container xs={12} md={6} alignItems={'center'}>
            <Form />
          </Grid>
        </Grid>
      </Container> */}
      <Container maxWidth={800} paddingBottom={'0 !important'}>
        <Form />
      </Container>
    </Box>
  );
};

Contact.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Contact;
