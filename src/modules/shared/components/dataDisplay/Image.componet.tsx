import { SbBlokData, storyblokEditable } from '@storyblok/react';
import NextImage from 'next/image';
import { Label, Text, Box, BoxProps } from 'theme-ui';

interface BlokProps extends SbBlokData {
  image: any;
  imageAlt: string;
  scale: any
}

interface ImageProps extends BlokProps {
  blok: BlokProps;
}

export const Image = ({ blok, ...rest }: ImageProps) => {
  console.log('asdsadasd', blok);

  const scale = 17.5 * (blok.scale.value / 100)

  return (
    <Box
      {...rest}
      {...storyblokEditable(blok)}
      sx={{
        minWidth: `${scale}rem`,
        minHeight: `${scale}rem`,
        height: 'auto',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <NextImage src={blok.image.filename} alt={blok.imageAlt} layout="fill" objectFit="contain" />
    </Box>
  );
};
