import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { Grid, Card, CardContent, Typography, CardMedia } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { PlayCircleOutline as PlayCircleOutlineIcon } from '@material-ui/icons';
// import axios from 'axios';
// import Parser from 'rss-parser'; // Import RSS parser library
// import React, { useEffect, useState } from 'react';

const Schedules = () => {
  const theme = useTheme();

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        const rssUrl = 'https://anchor.fm/s/4d8ca300/podcast/rss'; // Replace with your RSS feed URL
        const response = await fetch(rssUrl);
        const xmlText = await response.text();

        // Parse the XML data to extract episode information
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
        const items = xmlDoc.querySelectorAll('item');
        const parsedEpisodes = Array.from(items).map(item => {
          const title = item.querySelector('title').textContent;
          const description = item.querySelector('description').textContent;
          const audioUrl = item.querySelector('enclosure').getAttribute('url');
          const imageUrl = Array.from(item.getElementsByTagNameNS('http://www.itunes.com/dtds/podcast-1.0.dtd', 'image'))
            .map(image => image.getAttribute('href'))[0];
          return { title, description, audioUrl, imageUrl };
        });

        // Update state with the parsed episodes
        setEpisodes(parsedEpisodes);
      } catch (error) {
        console.error('Error fetching podcast episodes:', error);
      }
    };

    fetchEpisodes();
  }, []);

  // const handlePlayAudio = (audioUrl) => {
  //   const audioElement = new Audio(audioUrl);
  //   audioElement.play();
  // };

  return (

    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}>
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}>
          The Overcoming Woman
        </Box>
      </Box>
      <Grid container spacing={4}>
        {episodes.map((episode, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              // component={'a'}
              // href={''}
              display={'block'}
              width={'100%'}
              height={'100%'}
              sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                '&:hover': {
                  transform: `translateY(-${theme.spacing(1 / 2)})`,
                },
              }}>
              <Box
                component={Card}
                width={'100%'}
                height={'100%'}
                borderRadius={3}
                display={'flex'}
                flexDirection={'column'}>
                <CardMedia
                  image={episode.imageUrl}
                  title={episode.title}
                  sx={{
                    height: 320,
                  }}
                />
                <Box component={CardContent}>
                  <Box marginY={2}>
                    <Typography
                      align={'left'}
                      variant={'h6'}
                      color="textPrimary">
                      {episode.title}
                    </Typography>
                  </Box>
                  <Typography
                    align={'left'}
                    variant={'body2'}
                    color="textSecondary">
                    {episode.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box width="100%" component={CardActions} justifyContent={'flex-start'}>
                  <audio controls controlsList="nodownload" >
                    <source src={episode.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Schedules;
