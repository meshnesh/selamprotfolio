/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box>
      <Typography
        sx={{
          textTransform: 'uppercase',
          fontWeight: 'medium',
        }}
        gutterBottom
        color={'textSecondary'}
        align={'center'}
      >
        Get Started
      </Typography>
      <Box
        component={Typography}
        fontWeight={700}
        variant={'h3'}
        gutterBottom
        align={'center'}
      >
        Get started with M&W Technologies today
      </Box>
      <Typography
        variant={'h6'}
        component={'p'}
        color={'textSecondary'}
        align={'center'}
      > 
        Let's start by discussing your idea and lay out everything that needs to be done.
      </Typography>
    </Box>
  );
};

export default Footer;
