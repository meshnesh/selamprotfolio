import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Image from 'mui-image';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import aboutImg from '../../../../../assets/about.jpg';

const Headline = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const handleEnquireClick = () => {
    // Replace 'email@example.com' with the recipient's email address
    window.location.href = 'mailto:selamkairu@gmail.com';
  };

  return (
    <Box
      sx={{
        position: 'relative',
        '&::after': {
          position: 'absolute',
          content: '""',
          width: '30%',
          zIndex: 1,
          top: 0,
          left: 0,
          height: '100%',
        },
      }}>
      <Box position="relative" zIndex={2}>
        <Grid container spacing={2}>
          {/* Title */}
          {/* <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>
              Capturing Moments, Empowering Lives
            </Typography>
          </Grid> */}
          {/* Text */}
          <Grid item xs={12} md={6} data-aos={isMd ? 'fade-left' : 'fade-up'}>
            <Box marginBottom={4}>
              <Box
                component={Typography}
                fontWeight={700}
                variant={'h4'}
                marginTop='142px'
                gutterBottom>
                Accredited certified life coach, Multifaceted Empowerment Specialist & Visionary Leader
              </Box>
              {/* <Typography variant={'h6'} component={'p'} color={'textSecondary'}>
              Accredited certified life coach, Multifaceted Empowerment Specialist & Visionary Leader
              </Typography> */}
            </Box>
            <List disablePadding>
              <ListItem disableGutters data-aos="fade-up">
                <Typography variant="body1">
                Selam Kairu is the visionary behind &quot;The Overcoming Woman&quot;, coaching program and podcast committed to empowering women to achieve wholehearted breakthroughs and genuine life transformations, guiding them towards a life aligned with God&apos;s best. I&apos;m passionate about empowering women to uncover their hidden dreams and excel in their unique calling.Together, we tackle mental barriers, embrace the power of possibility, and ignite confidence.
                </Typography>
              </ListItem>
              
              <ListItem disableGutters data-aos="fade-up">
                <Typography variant="body1">
                Selam is a certified life coach, mental health coach, and Family Success Coach. She is a sought-after speaker and a dedicated teacher of God’s word. Her greatest joys include her deep relationship with God, celebrating 19 years of marriage with her husband, their two wonderful daughters, and treasured moments spent in unhurried communion with God and cherished friends.including &quot;Finding Purpose: A Journey to Discovering Your God-Given Calling.&quot;
                </Typography>
              </ListItem>
              
              <ListItem disableGutters data-aos="fade-up">
                <Typography variant="body1">
                Selam Kairu<br />Christian Life Coach for Women
                </Typography>
              </ListItem>
            </List>
            <Button
              variant="contained"
              color="primary"
              // component={Link}
              onClick={handleEnquireClick}
              to="/about"
              style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block' , width:'24%', marginTop: '40px'}}>
              GET IN TOUCH
            </Button>
          </Grid>
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Image src={aboutImg} width={'100%'} height={'100%'} alt="About Me"/>
          </Grid>
          {/* Captions */}
        </Grid>
      </Box>
    </Box>
  );
};

export default Headline;
