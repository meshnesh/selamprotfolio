import React from 'react';
import { Container, Typography, Divider, Box } from '@mui/material';
import { styled } from '@mui/system';

const careerGuidanceDescription = `
In the realm of career guidance, I wear multiple hats: mentor, advisor, and advocate. At the core of what I do is a deep-seated passion for helping individuals discover their potential and guiding them towards their greater aspirations.

Education and Lifelong Learning
I firmly believe that education is a cornerstone of personal and professional growth. I encourage and emphasise the importance of pursuing education and lifelong learning as pathways to unlocking new opportunities. Whether it's formal education, online courses, or self-directed learning, I help individuals identify the right educational avenues that align with their career goals and passions.

Dreams into Reality
Dreams are the seeds of innovation and progress. Many people harbour dreams of starting their own businesses or venturing into new career paths but often feel overwhelmed or unsure about taking the first step. I am here to change that narrative.

I empower individuals by showcasing real-life success stories, providing actionable insights, and offering personalised guidance tailored to their unique aspirations. By breaking down the journey into manageable steps and addressing fears or uncertainties, I instil confidence and belief that their dreams are attainable.

Encouragement and Support
More than just advice, I offer unwavering encouragement and support. I understand that pursuing dreams can be challenging, filled with setbacks and doubts. That's why I am a steadfast cheerleader, reminding individuals of their strengths, celebrating their milestones, and helping them navigate through obstacles.

Possibilities, Not Limitations
In a world often focused on limitations, I choose to focus on possibilities. I challenge conventional thinking and inspire individuals to think outside the box. By showing them that it is possible to turn their passions into profitable ventures or transition into fulfilling careers, I spark the flame of ambition and drive.

In essence, my approach to career guidance is holistic, empowering, and forward-thinking. I am committed to helping individuals realise their potential, chase their dreams, and create fulfilling careers and lives. Together, we explore, discover, and pave the way for greater things.
`;

// Styled components
const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffcc80', // Light orange color for career guidance, can be changed to an image in the future
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
}));

const CareerGuidancePage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 8, mb: 4 }}>
      <Banner>
        <Typography variant="h4" component="h1">
          Career Guidance
        </Typography>
      </Banner>
      <Divider sx={{ mb: 4 }} />
      <Typography variant="body1" paragraph>
        {careerGuidanceDescription.split('\n').map((paragraph, index) => (
          <React.Fragment key={index}>
            {paragraph}
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Container>
  );
};

export default CareerGuidancePage;
