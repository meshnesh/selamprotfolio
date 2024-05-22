import React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Instagram, Twitter, Facebook, Email, LinkedIn } from '@material-ui/icons';
import PodcastsIcon from '@mui/icons-material/Podcasts';

const Footer = () => (
  <Grid container spacing={2}>
    <Grid item xs={12}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            ENQUIRE 
            <br />
            <Link
              target="_blank"
              underline="none"
              component="a"
              href= 'mailto:selamkairu@gmail.com'
              color={'black'}>send me a message</Link>
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1">
            I’D LOVE TO LEARN MORE ABOUT YOU <br />Get in touch about my coaching services or photography
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="body1"  align={'center'} >
            FOLLOW ME
          </Typography>
          {/* Social Icons */}
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Link
                  target="_blank"
                  underline="none"
                  component="a"
                  href="https://www.instagram.com/selamkairu/?utm_source=ig_web_button_share_sheet"
                  color={'black'}>
                  <Instagram />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  target="_blank"
                  underline="none"
                  component="a"
                  href="https://twitter.com/selamkairu"
                  color={'black'}>
                  <Twitter />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  target="_blank"
                  underline="none"
                  component="a"
                  href="https://www.facebook.com/selam.bekele"
                  color={'black'}>
                  <Facebook />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  target="_blank"
                  underline="none"
                  component="a"
                  href= 'mailto:selamkairu@gmail.com'
                  color={'black'}>
                  <Email />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  target="_blank"
                  underline="none"
                  component="a"
                  href="https://www.linkedin.com/in/selam-kairu/"
                  color={'black'}>
                  <LinkedIn />
                </Link>
              </Grid>
              <Grid item xs={2}>
                <Link
                  target="_blank"
                  underline="none"
                  component="a"
                  href="https://open.spotify.com/show/3kbkTACVLwtMwWimzNHOw5?si=63aae26031dd4271"
                  color={'black'}>
                  <PodcastsIcon />
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={12}></Grid>
    <Grid item xs={12} marginTop={6}>
      <Typography
        align={'center'}
        variant={'subtitle2'}
        color="textSecondary"
        gutterBottom>
        &copy; 2024
        <Link
          underline="none"
          component="a"
          href=""
          color="textPrimary"
          variant={'subtitle2'}> SELAM KAIRU </Link>. ALL RIGHTS RESERVED
        
      </Typography>
    </Grid>
  </Grid>
);

export default Footer;
