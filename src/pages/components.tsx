import Head from 'next/head';
import { ISbStoryData, ISbStoryParams, StoryblokComponent, getStoryblokApi } from '@storyblok/react';
import {
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Progress,
  Radio,
  Spinner,
  Switch,
  Text,
} from 'theme-ui';
import { TextField } from '@/modules/shared/components/forms/TextField.component';
import { TextArea } from '@/modules/shared/components/forms/TextArea.component';
import { Alert } from '@/modules/shared/components/feedback/Alert.component';
import { Paper } from '@/modules/shared/components/surfaces/Paper.component';
import { Avatar } from '@/modules/shared/components/dataDisplay/Avatar.component';

interface StoryProps {
  story: ISbStoryData | null;
}

const Color = ({ name, value }: { name: string; value: string }) => (
  <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: 'xs' }}>
    <Box sx={{ width: '84px', height: '64px', bg: value }}></Box>
    <Text variant="caption">{name}</Text>
  </Flex>
);

export default function Components({ story }: StoryProps) {
  return (
    <>
      <Head>
        <title>Storyblok - NextJS - Theme UI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box as="main" sx={{ bg: 'background' }}>
        <StoryblokComponent blok={story?.content} />
        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'xl' }}>
          <Heading as="h3">Colors</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap' }}>
            <Color name="text" value="text" />
            <Color name="background" value="background" />
            <Color name="muted" value="muted" />
            <Color name="darken" value="darken" />
            <Color name="highlight" value="highlight" />
            <Color name="gray" value="gray" />
            <Color name="accent" value="accent" />
          </Flex>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap' }}>
            <Color name="primary" value="primary" />
            <Color name="primaryLight" value="primaryLight" />
            <Color name="primaryDark" value="primaryDark" />
          </Flex>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap' }}>
            <Color name="secondary" value="secondary" />
            <Color name="secondaryLight" value="secondaryLight" />
            <Color name="secondaryDark" value="secondaryDark" />
          </Flex>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap' }}>
            <Color name="info" value="info" />
            <Color name="success" value="success" />
            <Color name="warning" value="warning" />
            <Color name="error" value="error" />
          </Flex>
        </Flex>
        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Typography</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column' }}>
            <Heading as="h1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
            <Heading as="h2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
            <Heading as="h3">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
            <Heading as="h4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
            <Heading as="h5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
            <Heading as="h6">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
            <Text variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          </Flex>
        </Flex>

        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Buttons</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Flex sx={{ gap: 'md' }}>
              <Button variant="containedPrimary">Button</Button>
              <Button variant="containedSecondary">Button</Button>
            </Flex>
            <Flex sx={{ gap: 'md' }}>
              <Button variant="outlinedPrimary">Button</Button>
              <Button variant="outlinedSecondary">Button</Button>
            </Flex>
            <Flex sx={{ gap: 'md' }}>
              <Button variant="text">Button</Button>
              <Button variant="textPrimary">Button</Button>
              <Button variant="textSecondary">Button</Button>
            </Flex>
            <Flex sx={{ gap: 'md' }}>
              <IconButton aria-label="close">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentcolor">
                  <circle r={11} cx={12} cy={12} fill="none" stroke="currentcolor" strokeWidth={2} />
                </svg>
              </IconButton>
            </Flex>
          </Flex>
        </Flex>

        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Form Elements</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'flex-start' }}>
            <TextField label="Text Field component" error="Error message" />
            <TextArea label="Text Area component" error="Error message" />
            <Flex sx={{ gap: 'md' }}>
              <Checkbox />
              <Checkbox checked />
            </Flex>
            <Flex sx={{ gap: 'md' }}>
              <Radio />
              <Radio checked />
            </Flex>
          </Flex>
        </Flex>
        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Alerts</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column', maxWidth: 320 }}>
            <Alert variant="info" label="Beep boop, this is an info alert!" />
            <Alert variant="success" label="Beep boop, this is an info alert!" />
            <Alert variant="warning" label="Beep boop, this is an info alert!" />
            <Alert variant="error" label="Beep boop, this is an info alert!" />
          </Flex>
        </Flex>
        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Avatar</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column', maxWidth: 320 }}>
            <Avatar src="/goddess.jpg" alt="Goddess" />
          </Flex>
        </Flex>

        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Badges</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', maxWidth: 320 }}>
            <Badge variant="primary">New</Badge>
            <Badge variant="secondary">Cool</Badge>
          </Flex>
        </Flex>

        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Card</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column', maxWidth: 320 }}>
            <Card />
          </Flex>
        </Flex>

        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Paper</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Paper>
              <Flex sx={{ flexDirection: 'column', alignItems: 'flex-start', gap: 'sm' }}>
                <Text variant="body">Word of the Day</Text>
                <Box>
                  <Heading as="h4">be•nev•o•lent</Heading>
                  <Text variant="caption">adjective</Text>
                </Box>
                <Text variant="body2">
                  well meaning and kindly. <br /> &quot;a benevolent smile&quot;
                </Text>
                <Button sx={{ pl: 0 }} variant="textPrimary">
                  Learn More
                </Button>
              </Flex>
            </Paper>
          </Flex>
        </Flex>

        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Progess</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column', maxWidth: 320 }}>
            <Progress value={0.5} />
            <Flex sx={{ gap: 'sm', flexWrap: 'wrap', maxWidth: 320 }}>
              <Spinner size={64} />
              <Spinner size={42} />
              <Spinner size={24} />
            </Flex>
          </Flex>
        </Flex>

        <Flex sx={{ p: 'sm', flexDirection: 'column', gap: 'md', pb: 'lg' }}>
          <Heading as="h3">Switch</Heading>
          <Flex sx={{ gap: 'sm', flexWrap: 'wrap', flexDirection: 'column', maxWidth: 320 }}>
            <Switch />
            <Switch />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  let slug = 'components';

  let sbParams: ISbStoryParams = {
    version: 'draft', // or 'published'
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
