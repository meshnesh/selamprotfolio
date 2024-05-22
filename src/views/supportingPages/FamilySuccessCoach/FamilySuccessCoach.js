import React from 'react';
import { Container, Typography, Divider, Box, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const familySuccessContent = `
Navigating the complexities of family life can often feel overwhelming. As a dedicated Family Success Coach, I am committed to partnering with families to navigate through their unique challenges and cultivate harmonious, thriving households.

Parenting Challenges:
Every parent faces moments of uncertainty and stress. I offer personalised guidance and strategies to help parents build strong, nurturing relationships with their children, fostering understanding and effective communication.

Transitions:
Life is full of transitions, whether it's welcoming a new family member, moving to a new home, or adjusting to changes in family dynamics. I provide support during these pivotal moments, helping families adapt and grow stronger together.

Education Options & Resources:
Choosing the right educational path for your child can be daunting. I assist families in exploring various education options, understanding their child's unique learning style, and accessing valuable resources to support their educational journey.

Order in Homes:
A clutter-free and organised home environment can significantly reduce stress and improve overall well-being. I work with families to create personalised organisation systems that promote efficiency, harmony, and peace of mind.

Whether you're facing parenting dilemmas, navigating transitions, exploring education options, or seeking order and harmony in your home, I am here to support you every step of the way. Together, we can create a happier, healthier, and more successful family life.
`;

const reasonsToChoose = [
  'Personalised Support: I tailor my coaching approach to meet the specific needs and goals of each family, ensuring that our strategies are both practical and effective.',
  'Empowerment: My goal is to empower families with the tools, knowledge, and confidence they need to overcome challenges and thrive in their daily lives.',
  'Holistic Approach: Recognizing that each family is a unique system, I take a holistic approach to coaching, addressing emotional, educational, organisational, and relational aspects of family life.'
];

const Banner = styled(Box)(({ theme }) => ({
  backgroundColor: '#81c784', // Light green color for family success coaching
  padding: theme.spacing(8, 2),
  textAlign: 'center',
  color: theme.palette.common.white,
  marginBottom: theme.spacing(4),
}));

const FamilySuccessPage = () => {
  return (
    <Container maxWidth='lg' sx={{ mt: 8, mb: 4 }}>
      <Banner>
        <Typography variant='h4' component='h1'>
          Family Success Coach
        </Typography>
      </Banner>
      <Divider sx={{ mb: 4 }} />
      <Typography variant='body1' paragraph>
        {familySuccessContent.split('\n').map((paragraph, index) => {
          if (paragraph.trim().endsWith(':')) {
            return (
              <Typography key={index} variant='h6' component='h2' sx={{ mt: 2 }}>
                {paragraph.trim()}
              </Typography>
            );
          } else {
            return (
              <Typography key={index} variant='body1' paragraph>
                {paragraph}
                <br />
              </Typography>
            );
          }
        })}
      </Typography>
      <Typography variant='h4' align='center' gutterBottom sx={{ mt: 4 }}>
        Why Choose Family Success Coaching?
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <List>
        {reasonsToChoose.map((reason, index) => (
          <ListItem key={index}>
            <ListItemText primary={reason} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default FamilySuccessPage;
