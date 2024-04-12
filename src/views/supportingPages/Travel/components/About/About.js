/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
// import Avatar from '@mui/material/Avatar';
import Container from 'common/Container';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
// import TravelIllustration from 'svg/illustrations/Travel';
import Image from 'mui-image';
import SelamImage from '../../../../../assets/selamBg.png';
import Testimonials from 'views/supportingPages/Testimonials';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      {/* <Box marginBottom={{ xs: 4, sm: 8, md: 12 }}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          About
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
          gutterBottom
          data-aos="fade-up"
        >
          We are a small agency
          <br />
          of travel enthusiasts.
        </Box>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'textSecondary'}
          align={'center'}
          data-aos="fade-up"
        >
          Travel is the movement of people between distant geographical
          locations.
          <br />
          Travel can be done by foot, bicycle, automobile, train, boat, bus,
          airplane, ship or other means, with or without luggage, and can be one
          way or round trip.
          <br />
          Travel can also include relatively short stays between successive
          movements, as in the case of tourism.
        </Typography>
        <Box
          marginTop={2}
          display={'flex'}
          justifyContent={'center'}
          data-aos="fade-up"
        >
          <Button color={'primary'} variant={'contained'} size={'large'}>
            Contact us
          </Button>
        </Box>
      </Box> */}
      <Grid container spacing={4}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box maxWidth={600} width={'100%'}>
            {/* <TravelIllustration width={'100%'} height={'100%'} /> */}
            <Image src={SelamImage} width={'100%'} height={'100%'}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-left' : 'fade-up'}>
          <Box marginBottom={4}>
            {/* <Typography
              sx={{
                textTransform: 'uppercase',
                fontWeight: 'medium',
              }}
              gutterBottom
              color={'secondary'}>
              popular travellers
            </Typography> */}
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h2'}
              gutterBottom>
              Hi, I’m Selam Kairu
            </Box>
            <Typography variant={'h6'} component={'p'} color={'textSecondary'}>
            Accredited Proffesional Parenting Coach, Multifaceted Empowerment Specialist & Visionary Leader
            </Typography>
          </Box>
          <List disablePadding>
            <ListItem disableGutters data-aos="fade-up">
              <Typography variant="body1">
              Empowering Women, Inspiring Change: With a passion for public speaking, a keen eye for photography, and a heart devoted to missionary work, 
              I am dedicated to uplifting individuals and communities worldwide. As a trusted career development consultant, parenting coach, and empowerment strategist, 
              I specialize in guiding women towards their fullest potential. Let's collaborate to create meaningful impact and ignite positive transformation together.
              </Typography>
            </ListItem>
            {/* <ListItem disableGutters>
              {[
                'https://assets.maccarianagency.com/avatars/img1.jpg',
                'https://assets.maccarianagency.com/avatars/img2.jpg',
                'https://assets.maccarianagency.com/avatars/img3.jpg',
                'https://assets.maccarianagency.com/avatars/img4.jpg',
                'https://assets.maccarianagency.com/avatars/img5.jpg',
                'https://assets.maccarianagency.com/avatars/img6.jpg',
              ].map((item, index) => (
                <Box
                  component={Avatar}
                  key={index}
                  src={item}
                  width={60}
                  height={60}
                  marginLeft={index === 0 ? 0 : -2}
                  border={`${theme.spacing(1 / 2)} solid ${
                    theme.palette.background.paper
                  }`}
                  boxShadow={1}
                  data-aos="fade-up"
                />
              ))}
            </ListItem> */}
            <ListItem disableGutters data-aos="fade-up">
              <Typography variant="body1">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </Typography>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Container marginTop={8} paddingTop={'0 !important'}>
        <Testimonials />
      </Container>
    </Box>
  );
};

export default About;
