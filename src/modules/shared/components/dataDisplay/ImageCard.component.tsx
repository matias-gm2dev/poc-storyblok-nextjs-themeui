import { SbBlokData, storyblokEditable } from '@storyblok/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Flex, Heading } from 'theme-ui';

interface BlokProps extends SbBlokData {
  image: any;
  text: string;
  linkTo: any;
  imageAlt: string;
}

interface ImageCardProps {
  blok: BlokProps;
}

export const ImageCard = ({ blok }: ImageCardProps) => {
  const router = useRouter();

  return (
    <Box
      {...storyblokEditable(blok)}
      role="button"
      tabIndex={0}
      onClick={() => router.push(blok.linkTo.cached_url)}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: [320, 360],
        pb: ['99.99%', '133.33%'],
        overflow: 'hidden',
        borderRadius: 'md',
        img: {
          transition: 'transform 0.25s ease-in-out',
        },
        '.image-card-overlay': {
          transition: 'opacity 0.25s ease-in-out',
        },
        '&:hover': {
          img: {
            transform: 'scale(1.1)',
          },
          '.image-card-overlay': {
            opacity: 0.25,
          },
        },
      }}
    >
      <Image
        src={blok.image.filename}
        alt={blok.imageAlt}
        layout="fill"
        objectFit="cover"
        style={{
          maxWidth: '100%',
        }}
      />
      <Box
        className="image-card-overlay"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'primaryDark',
          opacity: 0.75,
        }}
      />
      <Flex
        sx={{
          position: 'absolute',
          zIndex: 'docked',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          h2: {
            fontWeight: 'body',
            transition: 'font-weight 0.25s ease-in-out',
          },
          '&:hover': {
            h2: {
              fontWeight: 'heading',
            },
          },
        }}
      >
        <Heading
          as="h2"
          sx={{
            color: 'white',
            textTransform: 'uppercase',
            letterSpacing: 'tight',
            textAlign: 'center',
          }}
        >
          {blok.text}
        </Heading>
      </Flex>
    </Box>
  );
};
