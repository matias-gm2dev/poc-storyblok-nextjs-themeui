import { Grid as ThemeUIGrid } from 'theme-ui';
import { storyblokEditable, SbBlokData, StoryblokComponent } from '@storyblok/react';
import { LayoutCommonProps } from './types';

interface BlokProps extends SbBlokData, LayoutCommonProps {
  columns: SbBlokData[];
}

interface GridProps {
  blok: BlokProps;
}

export const Grid = ({ blok }: GridProps) => {
  return (
    <ThemeUIGrid
      {...storyblokEditable(blok)}
      sx={{
        gridTemplateColumns: ['1fr', `repeat(${blok.columns.length}, 1fr)`],
        justifyItems: 'center',
        paddingX: blok.paddingHorizontal,
        paddingY: blok.paddingVertical,
        gap: blok.spacing,
        borderRadius: blok.borderRadius,
        backgroundColor: blok.backgroundColor
      }}
    >
      {blok.columns?.map((nestedBlok: SbBlokData) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </ThemeUIGrid>
  );
};
