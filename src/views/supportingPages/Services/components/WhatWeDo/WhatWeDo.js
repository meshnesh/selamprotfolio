import React from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { colors } from '@mui/material';
import Image from 'mui-image';
import feminine from '../../../../../assets/feminine.png';
import photo from '../../../../../assets/photo.png';
import missionary from '../../../../../assets/missionary.png';
import career from '../../../../../assets/career.png';
import speaking from '../../../../../assets/speaking.png';
import coach from '../../../../../assets/coach.png';

const WhatWeDo = () => {
  const theme = useTheme();
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
          align={'center'}>
          My Program
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}>
          How I can help you?
        </Box>
      </Box>
      <Grid container spacing={4}>
        {[
          {
            title: 'Public Speaking',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            icon: (
              <Image src={speaking} width={'100%'} height={'100%'} />),
            color: colors.teal,
          },
          {
            title: 'Photography',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            icon: (
              <Image src={photo} width={'100%'} height={'100%'} />
            ),color: colors.teal,
          },
          {
            title: 'Missionary',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            icon: (
              <Image src={missionary} width={'100%'} height={'100%'} />
            ),
            color: colors.teal,
          },
          {
            title: 'Career Development Consultant',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            icon: (
              <Image src={career} width={'100%'} height={'100%'} />
            ),
            color: colors.teal,
          },
          {
            title: 'Parenting Coach',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            icon: (
              <Image src={coach} width={'100%'} height={'100%'} />
            ),
            color: colors.teal,
          },
          {
            title: 'Women Empowerment',
            subtitle:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            icon: (
              <Image src={feminine} width={'100%'} height={'100%'} />
            ),
            color: colors.teal,
          },
        ].map((item, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Box component={Card} boxShadow={3} borderRadius={4}>
              <Box
                component={CardContent}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
                padding={{ xs: 2, sm: 4, md: 6 }}
                sx={{
                  '&:last-child': {
                    paddingBottom: { xs: 2, sm: 4, md: 6 },
                  },
                }}>
                <Box
                  component={Avatar}
                  variant="rounded"
                  width={92}
                  height={92}
                  marginBottom={2}
                  bgcolor={alpha(theme.palette.primary.main, 0.1)}
                  borderRadius={5}>
                  <Box color={theme.palette.primary.main}>{item.icon}</Box>
                </Box>
                <Typography
                  variant={'h6'}
                  gutterBottom
                  fontWeight={500}
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

export default WhatWeDo;
