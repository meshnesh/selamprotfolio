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
              'Dedicated to uplifting and empowering women worldwide, I offer a range of services including public speaking engagements, career development consulting, and tailored empowerment strategies designed to help women achieve their fullest potential in all aspects of life.',
            icon: (
              <Image src={feminine} width={'72%'} height={'72%'} />
            ),
          },
          {
            title: 'Capturing Moments, Creating Memories',
            subtitle:
              'With an eye for detail and a passion for storytelling, I specialize in photography services that go beyond just capturing images. From special occasions to everyday moments, I strive to create timeless memories that will be cherished for years to come.',
            icon: (
              <Image src={photo} width={'72%'} height={'72%'} />
            ),
          },
          {
            title: 'Make a Difference Through Missionary',
            subtitle:
              'Committed to making a positive impact, I am actively involved in missionary work that aims to bring hope, support, and resources to communities in need around the world. Through collaboration and compassion, we work to make a lasting difference in the lives of others.',
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
