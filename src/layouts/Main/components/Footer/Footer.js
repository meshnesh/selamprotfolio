import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom>
        &copy; 2024
        <Link
          underline="none"
          component="a"
          href="https://www.mwtechnologies.co"
          color="textPrimary"
          variant={'subtitle2'}> SELAM KAIRU </Link>, ALL RIGHTS RESERVED
        
      </Typography>
      {/* <Typography
        align={'center'}
        variant={'caption'}
        color="textSecondary"
        component={'p'}>
        When you visit or interact with our sites, services or tools, we may use cookies for storing information to
        help provide you with a better, faster and safer experience and for
        marketing purposes.
      </Typography> */}
    </Grid>
  </Grid>
);

export default Footer;
