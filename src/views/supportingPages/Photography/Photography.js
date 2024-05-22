import React from 'react';
import { Container, Grid, Card, CardMedia, Typography, Box, Divider } from '@mui/material';
import { styled } from '@mui/system';
import towers from '../../../assets/portfolio/DSC_0089.JPG';
import jesus from '../../../assets/portfolio/DSC_0135.JPG';
import river from '../../../assets/portfolio/DSC_0173.JPG';
import elephant from '../../../assets/portfolio/DSC_0311.JPG';
import flamingo from '../../../assets/portfolio/DSC_0423.JPG';
import giraffe from '../../../assets/portfolio/DSC_1016.JPG';
import bay from '../../../assets/portfolio/DSC_1066.JPG';

const portfolioImages = [
  { title: 'Towers', src: towers, description: 'Beyond the beauty and serenity captured in my photographs lies a deeper purpose - to transform lives. Each image is a stepping stone in a life coaching program designed to inspire, motivate, and empower others.' },
  { title: 'Jesus', src: jesus, description: 'In the world of photography, each snapshot is a story waiting to be told, a moment frozen in time that speaks volume' },
  { title: 'River', src: river, description: 'In Through the lens, I witness the raw beauty of nature, the delicate balance of ecosystems, and the incredible resilience of wildlife. Each animal I photograph teaches me something profound about life.' },
  { title: 'Elephant', src: elephant, description: 'One of my greatest passions lies in wildlife photography. Through the lens, I witness the raw beauty of nature, the delicate balance of ecosystems, and the incredible resilience of wildlife. Each animal I photograph teaches me something profound about life.' },
  { title: 'Flamingo', src: flamingo, description: 'Photography, for me, is a journey of discovery, learning, and transformation. Through the lens, I explore the wonders of nature, capture moments of beauty, and uncover life is invaluable lessons. It is not just about taking photos; it is about using those images to inspire, motivate, and empower others to live their best lives.' },
  { title: 'Giraffe', src: giraffe, description: 'Through the lens, I witness the raw beauty of nature, the delicate balance of ecosystems, and the incredible resilience of wildlife. Each animal I photograph teaches me something profound about life.' },
  { title: 'Bay', src: bay, description: 'In landscape photography, I find solace and inspiration in the vastness of nature. The rolling hills, towering mountains, and serene lakes serve as a reminder of the beauty that surrounds us and the infinite possibilities that lie ahead.' },
];

const CardWrapper = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '&:hover .overlay': {
    opacity: 1,
  },
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const CardMediaFull = styled(CardMedia)({
  height: 0,
  paddingTop: '100%', // 1:1 aspect ratio
});

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  padding: theme.spacing(2),
  textAlign: 'center',
}));

const Photography = () => {

  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{ mt: 4 }}>
        PORTFOLIO
      </Typography>
      <Divider sx={{ mb: 4 }} /> {/* Add a divider below the title */}
      <Grid container spacing={4}>
        {portfolioImages.map((image, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <CardWrapper>
              <CardMediaFull
                image={image.src}
                title={image.title}
              />
              <Overlay className="overlay">
                <Typography variant="h6" component="div">
                  {image.title}
                </Typography>
                <Typography variant="body2">
                  {image.description}
                </Typography>
              </Overlay>
            </CardWrapper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Photography;
