import React from 'react';
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';

const accordionData = [
  {
    isExpanded: false,
    title: 'How to get approved',
    contents: (
      <div>
        When you create an account, your account needs to be approved before you’re able to send campaigns or install forms on your website. This approval process is essential to ensuring the reputation of our servers.
        <br></br> 
        <br></br> 
        If your account is not approved, this doesn’t necessarily mean that you can’t use our platform. We may simply just require a bit more information from you in your profile.
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'How to create and schedule a campaign',
    contents: (
      <div>
        
        There are different types of campaigns to choose from including regular campaigns, RSS campaigns, Auto-resend and A/B split test.
        <br></br>
        &#9472; To create a campaign, navigate to Campaigns and click Create campaign.
        <br></br>
        &#9472; To select a particular campaign type, click the downward-facing arrow.
        <br></br>
        &#9472; On the next page, you can also change your campaign type using the tabs beneath the heading Choose campaign type.
        <br></br>
        &#9472; Next, choose the editor with which you’d like to create your campaign.
        <br></br>
        <br></br> 
        <em>
          If you would like to set up an automated email sequence, <a href="javascript:void(0)">check out this automation overview</a> instead.
        </em>
        
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How to pause an automation workflow ',
    contents: (
      <div>
        To pause an automation workflow:
        <br></br> 
        <br></br> 
        1. Navigate to Automations.
        <br></br> 
        <br></br> 
        2. Find the workflow you wish to pause.
        <br></br> 
        <br></br> 
        3. Toggle the workflow from Active to Paused.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How to use automation history',
    contents: (
      <div>
        Automation history allows you to track, review and restore changes made to the steps in your automation sequence, as well as viewing user actions and when the automation was turned off/on.
        <br></br>
        To locate your automation history:
        <br></br> 
        <br></br> 
        1. Navigate to Automations.
        <br></br> 
        <br></br> 
        2. Click on the title of the automation of which you want to review the history.
        <br></br> 
        <br></br> 
        3. Click on the History tab.
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'How to create and use groups',
    contents: (
      <div>
        Groups are individual lists you create to help organize your contacts. Using groups allows you to target your emails to a smaller list of subscribers based on their interests.
        <br></br> 
        <br></br> 
        Groups are often referred to as tags or audiences in other email marketing platforms.
        <br></br> 
        <br></br> 
        Whenever you create a form, landing page, website or schedule a campaign, you will be asked to select the target group.
        <br></br>
        <br></br> 
        To create a group:
        <br></br> 
        <br></br> 
        1. Navigate to Subscribers.
        <br></br> 
        <br></br> 
        2. Click on the Groups tab.
        <br></br> 
        <br></br> 
        3. Click Create group.
        <br></br> 
        <br></br> 
        .Enter the name of your new group.
        <br></br> 
        <br></br> 
        4. Click Create.
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section">
      <Container>
        <BlockTitle
          title="Frequently Asked Questions"
          text="Questions? Answers!"
        />
        <Flex sx={styles.flex}>
          <Box sx={styles.faqWrapper}>
            <Accordion items={accordionData} />
          </Box>
          <Box sx={styles.content}>
            <Heading as="h3">
              Have any questions? Please ask, we're here to help you.
            </Heading>
            <Text as="p">
              If you cannot find the answer to your question listed here, please contact us and we'll do our best to support you.
            </Text>
            <Link sx={styles.askButton} path="#">
              Talk To A Real Person
            </Link>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default FAQ;

const styles = {
  flex: {
    flexWrap: 'wrap',
    flexDirection: ['column', null, null, null, null, 'row-reverse'],
    pb: ['70px', null, null, null, '90px', null, '130px'],
  },
  content: {
    flex: ['0 0 100%', null, null, null, '0 0 33.333%'],
    maxWidth: ['100%', null, null, '450px', '100%'],
    mx: ['auto', null, null, null, '0'],
    mb: ['0px', null, null, null, '0'],
    textAlign: ['center', null, null, null, null, 'left'],
    mt: ['40px', null, null, null, null, '0'],
    h3: {
      fontSize: ['23px', null, null, null, '24px'],
      lineHeight: [1.5, null, null, null, 1.67],
      color: 'black',
      fontWeight: 700,
      letterSpacing: '-1.5px',
      mt: '-5px',
      pr: ['0', null, null, null, null, '30px'],
    },
    p: {
      fontSize: '16px',
      lineHeight: 1.87,
      color: '#343D48',
      opacity: 0.7,
      mt: '10px',
      pr: ['0', null, null, null, null, '80px'],
    },
  },
  askButton: {
    display: 'inline-block',
    verticalAlign: 'middle',
    backgroundColor: '#02073E',
    color: '#fff',
    borderRadius: '5px',
    fontSize: '16px',
    fontWeight: 700,
    p: '6.5px 19px',
    letterSpacing: '-0.16px',
    mt: '25px',
    transition: 'all 500ms ease',
    '&:hover': {
      opacity: 0.8,
    },
  },
  faqWrapper: {
    flex: ['0 0 100%', null, null, null, '0 0 66.666%'],
    em:{
      fontSize:'80%',
    },
    a:{
      color: 'primary',
      textDecoration: 'none',
      fontWeight: 700,
    }
  },
};
