import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DesignerIllustration from 'svg/illustrations/Designer';

const Hero = () => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'textSecondary'}
          align={'center'}
        >
          Our services
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}
        >
          High-impact design & development services
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
        >
          As experts in both design & development, we help you go through the
          complete process. From your new product idea, to design, development,
          launch and scale!
        </Typography>
      </Box>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Box height={'100%'} width={'100%'} maxWidth={600}>
          <DesignerIllustration height={'100%'} width={'100%'} />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
