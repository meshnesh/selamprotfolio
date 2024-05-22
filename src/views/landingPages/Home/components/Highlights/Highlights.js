import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Image from 'mui-image';
import feminine from '../../../../../assets/feminine.png';
import photo from '../../../../../assets/photo.png';
import missionary from '../../../../../assets/missionary.png';

const Highlights = () => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container spacing={2}>
        {[
          {
            title: 'Empowering Women Globally',
            subtitle:
              'Passionate about empowering women to prioritize self-care, discover purpose, and create joy-filled lives through personalized coaching and encouragement.',
            icon: (
              <Image src={feminine} width={'72%'} height={'72%'} />
            ),
          },
          {
            title: 'Capturing Moments, Creating Memories',
            subtitle:
              'Capturing Lifes Lessons Through the Lens: A Journey in Photography',
            icon: (
              <Image src={photo} width={'72%'} height={'72%'} />
            ),
          },
          {
            title: 'Make a Difference Through Missionary',
            subtitle:
              'Sharing Jesus love in public schools through gifts and stories, I empower children to find identity and hope in God.',
            icon: (
              <Image src={missionary} width={'72%'} height={'72%'} />
            ),
          },
        ].map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box width={1} height={'100%'} data-aos={'fade-up'}>
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}>
                <Box
                  component={Avatar}
                  width={60}
                  height={60}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.01)}
                  color={theme.palette.primary.main}>
                  {item.icon}
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  sx={{ fontWeight: 500 }}
                  align={'center'}>
                  {item.title}
                </Typography>
                <Typography align={'center'} color="textSecondary">
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Highlights;
