import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';

const missionDescription = `
I have dedicated my life to a mission close to my heart: sharing the gospel of Jesus Christ with children in public schools. 
I believe that every child deserves to hear the story of redemption and to understand their identity, which is rooted in God's 
love and purpose for them. My mission goes beyond just sharing words; it's about creating meaningful connections and providing 
tangible gifts that make a difference in their lives. I use everyday items like pencils, erasers, sharpeners, rulers, books, and 
shoes as tools to tell the story of redemption. Each gift serves as a symbol of God's love and the hope found in Jesus Christ.

Public schools are places where children from all walks of life come together to learn and grow. It's a setting where I have the 
opportunity to reach out to children who may not have heard the gospel before or may be struggling to understand their worth and 
identity. By being present in these schools, I aim to bring light into their lives and show them that they are valued and loved 
by God.

My ultimate desire is to see every child embrace their identity as a child of God and to experience the transformative power of 
the gospel. I believe that by sharing the story of redemption and by providing these gifts, I can make a lasting impact on their 
lives and help them discover their true purpose.
`;

// Styled components
const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFD700', // Light orange color for missions, can be changed to an image in the future
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
}));

const MissionPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Banner>
        <Typography variant="h4" component="h1">
        Missions
        </Typography>
      </Banner>
      <Divider sx={{ mb: 4 }} />
      <Typography variant="body1" paragraph>
        {missionDescription.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Container>
  );
};

export default MissionPage;
