import React, { useEffect, useState } from 'react';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
import { Grid, Card, CardContent, Typography, CardMedia } from '@material-ui/core';
// import { PlayCircleOutline as PlayCircleOutlineIcon } from '@material-ui/icons';
// import axios from 'axios';
// import Parser from 'rss-parser'; // Import RSS parser library
// import React, { useEffect, useState } from 'react';

const Schedules = () => {
  
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
    <Grid container spacing={3}>
      {episodes.map((episode, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardMedia
              component="img"
              alt={episode.title}
              height="140"
              image={episode.imageUrl}
              title={episode.title}
            />
            <CardContent style={{ flexGrow: 1 }}>
              <Typography variant="h6" component="h2" gutterBottom>
                {episode.title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                {episode.description}
              </Typography>
            </CardContent>
            <CardContent>
              <audio controls style={{ width: '100%' }}>
                <source src={episode.audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Schedules;
