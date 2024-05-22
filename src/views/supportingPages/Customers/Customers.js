import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from 'common/Container';
import  Schedules  from '../../landingPages/Home/components/Gallery/component/Schedules';

const Customers = () => {
  return (
    <Box>
      <Container>
        <Schedules />
      </Container>
    </Box>
  );
};

Customers.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default Customers;
