import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Numbers = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 25,
            subtitle: 'Over 25 years in combined expirience.',
          },
          {
            title: '500',
            subtitle: '500 completed customer projects',
          },
          {
            title: '99%',
            subtitle: '99% customer statisfication.',
          },
        ].map((item, i) => (
          <Grid key={i} item xs={12} md={4}>
            <Typography
              variant="h3"
              align={'center'}
              gutterBottom
              sx={{
                fontWeight: 'medium',
              }}
            >
              {item.title}
            </Typography>
            <Typography color="text.secondary" align={'center'} component="p">
              {item.subtitle}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Numbers;
