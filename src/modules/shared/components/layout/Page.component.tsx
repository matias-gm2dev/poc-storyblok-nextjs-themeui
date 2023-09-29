import { Box } from 'theme-ui';
import { storyblokEditable, SbBlokData, StoryblokComponent } from '@storyblok/react';

interface BlokProps extends SbBlokData {
  body: SbBlokData[];
}

interface PageProps {
  blok: BlokProps;
}

export const Page = ({ blok }: PageProps) => {
  return (
    <Box {...storyblokEditable(blok)}>
      {blok.body?.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Box>
  );
};
