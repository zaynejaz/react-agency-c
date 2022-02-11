import React from 'react';
import { Container, Box, Grid } from 'theme-ui';
import Masonry from 'react-masonry-component';
import BlockTitle from 'components/block-title';
import BlogCard from 'components/cards/blog-card';

import blogImage1 from 'assets/blog-1-1.png';
import blogImage2 from 'assets/blog-1-2.png';
import blogImage3 from 'assets/blog-1-3.png';
import blogImage4 from 'assets/blog-1-4.png';

const BLOG_DATA = [
  {
    image: blogImage1,
    title: 'How to Use Email Analytics to Inform Your Marketing Strategy',
    description:
      'Email plays a critical role in your marketing mix—and not just because it provides a 36:1 ROI. You can also use email to inform the rest of your marketing strategy.',
    path: '/',
    linkLabel: 'Read more',
  },
  {
    image: null,
    title: 'The Ultimate Guide to Dark Mode for Email Marketers',
    description: null,
    path: '/',
    linkLabel: null,
  },
  {
    image: blogImage3,
    title: 'Read Email Image Blocking: Answering the What, Why, Where, Who, and How',
    description: null,
    path: '/',
    linkLabel: null, 
  },
  {
    image: blogImage2,
    title: 'Email Automation for Customer Re-Engagement',
    description:
      'Don\'t take it personally, there\'s more than one way to win a customer\'s heart over... again, and again ...',
    path: '/',
    linkLabel: 'Read more',
  },
  {
    image: blogImage4,
    title: 'How To Create Emails That Sell With Conversion-Centered Design',
    description: null,
    path: '/',
    linkLabel: null,
  },
];

const masonryOptions = {
  transitionDuration: 0,
};

const Blogs = () => {
  return (
    <Box as="section" id="news" sx={styles.blogs}>
      <Container>
        <BlockTitle
          title="Constantly Updated Blog Insights"
          text="Discover something new everyday"
        />
        <Box as={Masonry} options={masonryOptions} sx={styles.blogWrapper}>
          {BLOG_DATA.map(
            ({ image, title, description, path, linkLabel }, index) => (
              <BlogCard
                key={index}
                image={image}
                title={title}
                description={description}
                path={path}
                linkLabel={linkLabel}
              />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Blogs;

const styles = {
  blogs: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
    pb: ['40px', null, null, null, '140px', null, '100px'],
  },
  blogWrapper: {
    mx: '-15px',
  },
};
