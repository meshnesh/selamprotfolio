import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';

// Description text
const womenEmpowermentDescription = `
I'm passionate about empowering women to discover their God-given purpose. Over the years, I've dedicated myself to guiding women 
through a transformative journey of self-discovery and rekindling their dreams.

In today's fast-paced world, it's easy for women to put themselves last, often neglecting their own needs and desires. I believe 
that every woman deserves to find time for herself and embrace self-care as a vital part of her well-being. Through personalised 
coaching and heartfelt encouragement, I challenge women to prioritise themselves, nurture their souls, and create a life filled 
with purpose and joy.

Whether you're feeling lost, stuck, or just in need of a fresh perspective, I'm here to support you every step of the way. 
Together, we'll explore your passions, uncover your unique gifts, and empower you to dream again. Let's embark on this beautiful 
journey of self-discovery and transformation.
`;

// Styled components
const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8bbd0', // Light pink color for women empowerment, can be changed to an image in the future
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
}));

const WomenEmpowermentPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Banner>
        <Typography variant="h4" component="h1">
          Women Empowerment
        </Typography>
      </Banner>
      <Divider sx={{ mb: 4 }} />
      <Typography variant="body1" paragraph>
        {womenEmpowermentDescription.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Container>
  );
};

export default WomenEmpowermentPage;
