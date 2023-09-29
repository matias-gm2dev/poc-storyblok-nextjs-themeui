import { Flex } from 'theme-ui';
import { storyblokEditable, SbBlokData, StoryblokComponent } from '@storyblok/react';
import { LayoutCommonProps } from './types';

interface BlokProps extends SbBlokData, LayoutCommonProps {
  items: SbBlokData[];
  direction: 'row' | 'column';
  hideOnMobile: boolean;
  hideOnDesktop: boolean;
}

interface StackProps {
  blok: BlokProps;
}

export const Stack = ({ blok }: StackProps) => {
  return (
    <Flex
      {...storyblokEditable(blok)}
      sx={{
        display: [blok.hideOnMobile ? 'none' : 'flex', blok.hideOnDesktop ? 'none' : 'flex'],
        paddingX: blok.paddingHorizontal,
        paddingY: blok.paddingVertical,
        gap: blok.spacing,
        borderRadius: blok.borderRadius,
        backgroundColor: blok.backgroundColor,
        flexDirection: blok.direction,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {blok.items?.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </Flex>
  );
};
