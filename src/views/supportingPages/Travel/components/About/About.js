/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
// import Container from 'common/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import Image from 'mui-image';
import SelamImage from '../../../../../assets/HAW_1455.jpg';
// import Testimonials from 'views/supportingPages/Testimonials';
import { Link } from 'react-router-dom';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const About = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
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
            <Image src={SelamImage} width={'100%'} height={'100%'}/>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-left' : 'fade-up'}>
          <Box marginBottom={4}>
            <Box
              component={Typography}
              fontWeight={700}
              variant={'h2'}
              marginTop='142px'
              gutterBottom>
              Hi, I’m Selam Kairu
            </Box>
            <Typography variant={'h6'} component={'p'} color={'textSecondary'}>
            Accredited certified life coach, Multifaceted Empowerment Specialist & Visionary Leader
            </Typography>
          </Box>
          <List disablePadding>
            <ListItem disableGutters data-aos="fade-up">
              <Typography variant="body1">
              Discover empowerment and transformation with Selam Kairu, the visionary behind 'The Overcoming Woman' coaching program and podcast. 
              Selam, a certified life coach and sought-after speaker, is committed to guiding women towards wholehearted breakthroughs and genuine life transformations. 
              Join her in uncovering hidden dreams, embracing possibilities, and igniting confidence. Together, let's embark on a journey towards a life aligned with God's best.
              </Typography>
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/page-about"
            style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' , width:'24%'}}>
            About Selam
          </Button>
        </Grid>
      </Grid>
      {/* <Container marginTop={8} paddingTop={'0 !important'}>
        <Testimonials />
      </Container> */}
    </Box>
  );
};

export default About;
