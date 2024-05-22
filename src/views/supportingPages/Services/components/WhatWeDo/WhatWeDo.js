import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
import { colors } from '@mui/material';

const WhatWeDo = ({ themeMode = 'light' }) => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const familyLessons = [
    {
      title: '',
      description: 'Navigating the complexities of family life can often feel overwhelming. As a dedicated Family Success Coach, I am committed to partnering with families to navigate through their unique challenges and cultivate harmonious, thriving households.',
      lessons: []
    },
    {
      title: 'Parenting Challenges:',
      description: 'Every parent faces moments of uncertainty and stress. I offer personalised guidance and strategies to help parents build strong, nurturing relationships with their children, fostering understanding and effective communication.',
      lessons: []
    },
    {
      title: 'Transitions:',
      description: 'Life is full of transitions, whether it\'s welcoming a new family member, moving to a new home, or adjusting to changes in family dynamics. I provide support during these pivotal moments, helping families adapt and grow stronger together.',
      lessons: []
    },
    {
      title: 'Education Options & Resources:',
      description: 'Choosing the right educational path for your child can be daunting. I assist families in exploring various education options, understanding their childs unique learning style, and accessing valuable resources to support their educational journey.',
      lessons: []
    },
    {
      title: 'Order in Homes:',
      description: 'Life is full of transitions, whether it\'s welcoming a new family member, moving to a new home, or adjusting to changes in family dynamics. I provide support during these pivotal moments, helping families adapt and grow stronger together.',
      lessons: []
    },
    {
      title: 'Why Choose Family Success Coaching?',
      description: 'A clutter-free and organised home environment can significantly reduce stress and improve overall well-being. I work with families to create personalised organisation systems that promote efficiency, harmony, and peace of mind.',
    },

    {
      title: '',
      description: 'Personalised Support: I tailor my coaching approach to meet the specific needs and goals of each family, ensuring that our strategies are both practical and effective.',
    },
    {
      title: '',
      description: 'Empowerment: My goal is to empower families with the tools, knowledge, and confidence they need to overcome challenges and thrive in their daily lives.',
    },
    {
      title: '',
      description: 'Holistic Approach: Recognizing that each family is a unique system, I take a holistic approach to coaching, addressing emotional, educational, organisational, and relational aspects of family life',
    },
    
  ];

  const photographyLessons = [
    {
      title: '',
      description: 'In the world of photography, each snapshot is a story waiting to be told, a moment frozen in time that speaks volumes. For me, photography is not just about capturing beautiful images; it is a powerful tool to teach life is invaluable lessons. Every photograph I take is a canvas on which I paint tales of inspiration, resilience, and transformation.',
      lessons: []
    },
    {
      title: 'Natures Classroom: Wildlife Photography',
      description: 'One of my greatest passions lies in wildlife photography. Through the lens, I witness the raw beauty of nature, the delicate balance of ecosystems, and the incredible resilience of wildlife. Each animal I photograph teaches me something profound about life.',
      lessons: []
    },
    {
      title: '',
      description: 'The lions fierce determination teaches us to pursue our goals with unwavering focus and courage. The graceful flight of a bird reminds us of the freedom that comes with letting go of our fears and spreading our wings. Through these images, I aim to inspire others to embrace the lessons that nature offers and to find strength in the face of challenges.',
      lessons: []
    },
    {
      title: 'Landscapes of Reflection',
      description: 'In landscape photography, I find solace and inspiration in the vastness of nature. The rolling hills, towering mountains, and serene lakes serve as a reminder of the beauty that surrounds us and the infinite possibilities that lie ahead.',
      lessons: []
    },
    {
      title: '',
      description: 'Each landscape I capture is a reflection of lifes journey - the ups and downs, the twists and turns, and the moments of stillness that allow us to reflect and grow. Through these images, I encourage others to embrace lifes adventures with an open heart and a curious mind, seeking beauty in every corner of the world.',
      lessons: []
    },
    {
      title: 'Transforming Lives Through Imagery',
      description: 'Beyond the beauty and serenity captured in my photographs lies a deeper purpose - to transform lives. Each image is a stepping stone in a life coaching program designed to inspire, motivate, and empower others.',
    },

    {
      title: '',
      description: 'By sharing the stories behind my photographs, I aim to draw out lessons that resonate with people from all walks of life. Whether it is a story of perseverance from the animal kingdom or a lesson in mindfulness from a tranquil landscape, I believe that photography has the power to spark change and inspire growth.',
    },
    {
      title: 'Conclusion',
      description: 'Photography, for me, is a journey of discovery, learning, and transformation. Through the lens, I explore the wonders of nature, capture moments of beauty, and uncover lifes invaluable lessons. Its not just about taking photos; its about using those images to inspire, motivate, and empower others to live their best lives.',
    },
    {
      title: '',
      description: 'Join me on this incredible journey as we explore the world through the lens of a camera and discover the lessons that life has to offer. Together, we can transform lives one photograph at a time.',
    },
    
  ];

  const careerLessons = [
    {
      title: '',
      description: 'In the realm of career guidance, I wear multiple hats: mentor, advisor, and advocate. At the core of what I do is a deep-seated passion for helping individuals discover their potential and guiding them towards their greater aspirations.',
    },
    {
      title: 'Education and Lifelong Learning',
      description: 'One of my greatest passions lies in wildlife photography. Through the lens, I witness the raw beauty of nature, the delicate balance of ecosystems, and the incredible resilience of wildlife. Each animal I photograph teaches me something profound about life.',
      lessons: []
    },
    {
      title: 'Dreams into Reality',
      description: 'Dreams are the seeds of innovation and progress. Many people harbour dreams of starting their own businesses or venturing into new career paths but often feel overwhelmed or unsure about taking the first step. I am here to change that narrative.',
      lessons: []
    },
    {
      title: '',
      description: 'I empower individuals by showcasing real-life success stories, providing actionable insights, and offering personalised guidance tailored to their unique aspirations. By breaking down the journey into manageable steps and addressing fears or uncertainties, I instil confidence and belief that their dreams are attainable.',
      lessons: []
    },
    {
      title: 'Encouragement and Support',
      description: 'More than just advice, I offer unwavering encouragement and support. I understand that pursuing dreams can be challenging, filled with setbacks and doubts. That is why I am a steadfast cheerleader, reminding individuals of their strengths, celebrating their milestones, and helping them navigate through obstacles.',
      lessons: []
    },
    {
      title: 'Possibilities, Not Limitations',
      description: 'In a world often focused on limitations, I choose to focus on possibilities. I challenge conventional thinking and inspire individuals to think outside the box. By showing them that it is possible to turn their passions into profitable ventures or transition into fulfilling careers, I spark the flame of ambition and drive.',
    },

    {
      title: '',
      description: 'In essence, my approach to career guidance is holistic, empowering, and forward-thinking. I am committed to helping individuals realise their potential, chase their dreams, and create fulfilling careers and lives. Together, we explore, discover, and pave the way for greater things.',
    }
  ];

  return (
    <Box>
      <Box marginBottom={4}>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          gutterBottom
          align={'center'}>
          YOUR BRAND JOURNEY
        </Box>
        <Typography align={'center'} color="textSecondary" variant={'h6'}>
        Take a look at my services, let’s begin…
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 8 : 4}>
        {[
          {
            title: 'Women Empowerment',
            subtitle:
              'Passionate about empowering women to prioritize self-care, discover purpose, and create joy-filled lives through personalized coaching and encouragement.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
            ),
            color: colors.indigo,
            lessons: [
              'Im passionate about empowering women to discover their God-given purpose. Over the years, Ive dedicated myself to guiding women through a transformative journey of self-discovery and rekindling their dreams.',
              'In todays fast-paced world, it is easy for women to put themselves last, often neglecting their own needs and desires. I believe that every woman deserves to find time for herself and embrace self-care as a vital part of her well-being. Through personalised coaching and heartfelt encouragement, I challenge women to prioritise themselves, nurture their souls, and create a life filled with purpose and joy.',
              'Whether you are feeling lost, stuck, or just in need of a fresh perspective, I am here to support you every step of the way. Together, we will explore your passions, uncover your unique gifts, and empower you to dream again. Let us embark on this beautiful journey of self-discovery and transformation.',
            ],
          },
          {
            title: 'Missions',
            subtitle:
              'Sharing Jesus love in public schools through gifts and stories, I empower children to find identity and hope in God.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            ),
            color: colors.lightGreen,
            lessons: [
              'I have dedicated my life to a mission close to my heart: sharing the gospel of Jesus Christ with children in public schools. I believe that every child deserves to hear the story of redemption and to understand their identity, which is rooted in Gods love and purpose for them.My mission goes beyond just sharing words; its about creating meaningful connections and providing tangible gifts that make a difference in their lives. I use everyday items like pencils, erasers, sharpeners, rulers, books, and shoes as tools to tell the story of redemption. Each gift serves as a symbol of Gods love and the hope found in Jesus Christ.',
              'Public schools are places where children from all walks of life come together to learn and grow. Its a setting where I have the opportunity to reach out to children who may not have heard the gospel before or may be struggling to understand their worth and identity. By being present in these schools, I aim to bring light into their lives and show them that they are valued and loved by God.',
              'My ultimate desire is to see every child embrace their identity as a child of God and to experience the transformative power of the gospel. I believe that by sharing the story of redemption and by providing these gifts, I can make a lasting impact on their lives and help them discover their true purpose.',
            ],
          },
          {
            title: 'Family Success Coach',
            subtitle:
              'To provide a tailored guidance to navigate parenting challenges, transitions, education decisions, and home organization, empowering families to thrive together in harmony and success.',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ),
            color: colors.amber,
            lessons: familyLessons.map((lesson, index) => (
              <div key={index}>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                <div key={index}>
                  <ListItemText primary={lesson.lessons} /></div>
              </div>
            )),
          },
          {
            title: 'Photography',
            subtitle:
              'Capturing Lifes Lessons Through the Lens: A Journey in Photography',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ),
            color: colors.blueGrey,
            lessons: photographyLessons.map((lesson, index) => (
              <div key={index}>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                <div key={index}>
                  <ListItemText primary={lesson.lessons} /></div>
              </div>
            )),
          },
          {
            title: 'CAREER GUIDANCE',
            subtitle:
              'Career Guidance with a Vision',
            icon: (
              <svg
                width={32}
                height={32}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            ),
            color: colors.blue,
            lessons: careerLessons.map((lesson, index) => (
              <div key={index}>
                <h3>{lesson.title}</h3>
                <p>{lesson.description}</p>
                <div key={index}>
                  <ListItemText primary={lesson.lessons} /></div>
              </div>
            )),
          }
          // Add other sections here...
        ].map((item, i) => (
          <Grid item xs={12} key={i}>
            <Grid
              container
              spacing={isMd ? 4 : 2}
              flexDirection={i % 2 === 1 ? 'row-reverse' : 'row'}>
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-right' : 'fade-up'}>
                <Box
                  component={Card}
                  display={'flex'}
                  alignItems={'center'}
                  width={'100%'}
                  height={'100%'}
                  bgcolor={item.color[themeMode === 'light' ? 50 : 900]}
                  boxShadow={0}>
                  <CardContent>
                    <Box
                      component={Avatar}
                      width={60}
                      height={60}
                      marginBottom={6}
                      bgcolor={item.color[themeMode === 'light' ? 900 : 50]}
                      boxShadow={4}>
                      <Box color={item.color[themeMode === 'light' ? 50 : 900]}>
                        {item.icon}
                      </Box>
                    </Box>
                    <Box
                      component={Typography}
                      variant={'h6'}
                      gutterBottom
                      fontWeight={500}>
                      {item.title}
                    </Box>
                    <Typography color="text.secondary">
                      {item.subtitle}
                    </Typography>
                  </CardContent>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                data-aos={isMd ? 'fade-left' : 'fade-up'}>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  width={'100%'}
                  height={'100%'}>
                  <Box marginBottom={2}>
                    <Box
                      component={Typography}
                      variant={'h4'}
                      gutterBottom
                      fontWeight={600}>
                      {item.title}
                    </Box>
                  </Box>

                  {/* <Grid container spacing={1}>
                    {item.lessons}
                  </Grid> */}

                  <Grid container spacing={1}>
                    {item.lessons.map((lesson, j) => (
                      <Grid item xs={12} key={j}>
                        <Box
                          component={ListItem}
                          disableGutters
                          width={'auto'}
                          padding={0}>
                          <ListItemText primary={lesson} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

WhatWeDo.propTypes = {
  themeMode: PropTypes.string.isRequired,
};

export default WhatWeDo;
