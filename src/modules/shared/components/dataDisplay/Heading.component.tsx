import { Heading as ThemeUIHeading } from 'theme-ui';
import { storyblokEditable, SbBlokData } from '@storyblok/react';

interface BlokProps extends SbBlokData {
  headline: string;
}

interface HeadingProps {
  blok: BlokProps;
}

export const Heading = ({ blok }: HeadingProps) => {
  return <ThemeUIHeading {...storyblokEditable(blok)}>{blok.headline}</ThemeUIHeading>;
};
