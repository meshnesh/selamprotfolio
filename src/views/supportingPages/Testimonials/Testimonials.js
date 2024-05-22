import React from 'react';
import Slider from 'react-slick';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from 'common/Container';

const Testimonials = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let slidesToShow = 1;
  if (isXs) {
    slidesToShow = 1;
  }
  if (isSm) {
    slidesToShow = 2;
  }
  if (isMd) {
    slidesToShow = 3;
  }

  const sliderOpts = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
    <Box>
      <Container paddingY={'0 !important'}>
        <Box marginBottom={4}>
          <Typography
            sx={{
              textTransform: 'uppercase',
              fontWeight: 'medium',
            }}
            gutterBottom
            color={'secondary'}
            align={'center'}>
            TESTIMONIALS
          </Typography>
          <Box
            component={Typography}
            fontWeight={700}
            variant={'h3'}
            gutterBottom
            align={'center'}>
            Don&apos;t take my word for it
          </Box>
          <Typography
            variant={'h6'}
            component={'p'}
            color={'textSecondary'}
            align={'center'}>
            See what our amazing past clients have to say about the work done by
            us
          </Typography>
        </Box>
      </Container>
      <Slider {...sliderOpts}>
        {[
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/airbnb-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'Munene Ng\'ang\'a'
          },
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/amazon-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'John Dankotte'
          },
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/fitbit-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'Mwalimu Macharia'
          },
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/google-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'Odinga Nyerere'
          },
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/hubspot-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'Rachael Karua'
          },
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/mapbox-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'Otile Musalia'
          },
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/netflix-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'Ken Kairu'
          },
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/paypal-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'Wangari Muchuki'
          },
          {
            companyLogo:
              'https://assets.maccarianagency.com/svg/logos/slack-original.svg',
            description:
              'Lorem ipsum dolor sit amet consectetur adipiscing elit mattis etiam curabitur ornare ante interdum natoque eu.',
            user: 'Jane Wachira'
          },
        ].map((item, i) => (
          <Box key={i} padding={{ xs: 1, sm: 2, md: 3 }}>
            <Box
              component={'a'}
              href={''}
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
                <Box
                  component={CardContent}
                  display={'flex'}
                  flexDirection={'column'}
                  alignItems={'center'}>
                  <Box maxWidth={100} marginBottom={2}>
                    {/* <Box
                      component="img"
                      height={'100%'}
                      width={'100%'}
                      src={item.companyLogo}
                      alt="..."/> */}
                  </Box>
                  <Typography
                    align={'center'}
                    variant={'body2'}
                    color="textSecondary">
                    {item.description}
                  </Typography>
                </Box>
                <Box flexGrow={1} />
                <Box component={CardActions} justifyContent={'center'}>
                  {item.user}
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Testimonials;
