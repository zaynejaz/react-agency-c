import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text: 'Our drag & drop editor allows you to build professional and beautiful newsletters on your own.',
    heading: 'Create amazing campaigns',
    path: '#',
  },
  {
    image: serviceImage2,
    text: 'Your websites, landing pages, pop-ups or embedded forms will attract people the world over.',
    heading: 'Grow your audience',
    path: '#',
  },
  {
    image: serviceImage3,
    text: 'Turn you subscribers into customers by earning directly from emails and landing pages.',
    heading: 'Sell digital products',
    path: '#',
  },
  {
    image: serviceImage4,
    text: 'Personalize your campaigns with advanced targeting features to deliver the right email every time.',
    heading: 'Deliver the right message',
    path: '#',
  },
  {
    image: serviceImage5,
    text: 'Improve your metrics with critical email marketing tests focused on streamlining your emails.',
    heading: 'Optimize campaigns',
    path: '#',
  },
  {
    image: serviceImage6,
    text: 'Learn from every email. Monitor your campaign performance to find what works best for you.',
    heading: 'Track your results',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Powerful, Yet Simple Features"
          text="Grow subscribers and build stronger relationships"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
