/* eslint-disable react/no-unescaped-entities */
import React from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import RocketIllustration from 'svg/illustrations/Rocket';
// import Image from 'mui-image';
// import SelamImage from '../../../../../assets/HAW_1387.jpg';

const Hero = () => {
  // const theme = useTheme();
  // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
  //   defaultMatches: true,
  // });

  return (
    <Grid container alignItems="flex-end" style={{ height: '100%' }}>
      <Grid item xs={12} md={4}>
        <Box maxWidth="100%" textAlign="left" marginTop="32%">
          <Typography variant="h3" component="h1" gutterBottom style={{ fontWeight: 'bold' }}>
            Empowering Women & Inspiring Change
          </Typography>
          <Typography variant="h5">
            With a passion for Public Speaking
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
