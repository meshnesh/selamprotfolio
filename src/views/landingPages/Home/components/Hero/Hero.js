/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import RocketIllustration from 'svg/illustrations/Rocket';
import Image from 'mui-image';
import SelamImage from '../../../../../assets/selamBg.png';

const Hero = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Grid container spacing={4}>
      <Grid item container alignItems={'center'} xs={12} md={6}>
        <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
          {/* <Box marginBottom={2}>
            <Typography
              variant="h4"
              color="textPrimary"
              sx={{
                fontWeight: 700,
              }}
            >
              Meet{' '}: 
              <Typography
                color={'primary'}
                component={'span'}
                variant={'inherit'}> 
                 Selam Kairu
              </Typography>
              <br />
              Multifaceted Empowerment Specialist & Visionary Leader
            </Typography>
          </Box> */}
          <Box marginBottom={3}>
            <Typography
              variant="h3"
              component="span"
              color="textPrimary"
              letterSpacing={2.5}
              lineHeight={1.3}
              fontSize={75}
              sx={{ fontWeight: 500 }}>
              Empowering Women & Inspiring Change with a passion for Public Speaking
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          height={'100%'}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Box height={'100%'} width={'100%'} maxHeight={600}>
            {/* <RocketIllustration width={'100%'} height={'100%'} /> */}
            <Image src={SelamImage} width={'100%'} height={'100%'} />
            {/* <Image src="https://media.licdn.com/dms/image/C4D03AQGjhv5C1ZXaXw/profile-displayphoto-shrink_800_800/0/1569572754569?e=1718236800&v=beta&t=-MXQmCcAnnaK6S6fB4Gdctka5jlknnxGrG9hZRkdefk" width={'100%'} height={'100%'} /> */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
