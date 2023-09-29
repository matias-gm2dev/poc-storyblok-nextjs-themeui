import { Container as ThemeUIContainer } from 'theme-ui';
import { storyblokEditable, SbBlokData, StoryblokComponent } from '@storyblok/react';
import { LayoutCommonProps } from './types';

interface BlokProps extends SbBlokData, LayoutCommonProps {
  body: SbBlokData[];
}

interface ContainerProps {
  blok: BlokProps;
}

export const Container = ({ blok }: ContainerProps) => {
  return (
    <ThemeUIContainer
      {...storyblokEditable(blok)}
      sx={{
        paddingX: blok.paddingHorizontal,
        paddingY: blok.paddingVertical,
        gap: blok.spacing,
        borderRadius: blok.borderRadius,
        backgroundColor: blok.backgroundColor,
        mx: 'auto',
        px: 'md'
      }}
    >
      {blok.body?.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </ThemeUIContainer>
  );
};
