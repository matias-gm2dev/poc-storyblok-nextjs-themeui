import { storyblokEditable, SbBlokData, StoryblokComponent } from '@storyblok/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, Button, Flex, Heading, Text } from 'theme-ui';

interface BlokProps extends SbBlokData {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: any;
  image: any;
  imageAlt: string;
}

interface HeroBannerProps {
  blok: BlokProps;
}

export const HeroBanner = ({ blok }: HeroBannerProps) => {
  const router = useRouter();
  return (
    <Flex
      {...storyblokEditable(blok)}
      sx={{
        position: 'relative',
        width: '100%',
        height: '80vh',
        maxHeight: [658, 920],
        justifyContent: 'center',
        alignItems: 'flex-end',
        px: 'md',
        pb: 'xl',
      }}
    >
      <Image
        src={blok.image?.filename}
        alt={blok.imageAlt}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        priority={true}
        quality={100}
      />
      <Box
        sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'primaryDark', opacity: 0.75 }}
      />
      <Flex sx={{ flexDirection: 'column', alignItems: 'center', gap: 'md', position: 'relative' }}>
        <Flex sx={{ flexDirection: 'column', alignItems: 'center' }}>
          <Heading
            as="h1"
            sx={{
              color: 'white',
              fontWeight: 'body',
              fontSize: ['3xl', '4xl'],
              textShadow: '0 0 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            {blok.title}
          </Heading>
          <Heading
            as="h3"
            sx={{
              color: 'white',
              fontWeight: 'light',
              fontSize: ['lg', 'xl'],
              textShadow: '0 0 2px rgba(255, 255, 255, 0.5)',
            }}
          >
            {blok.subtitle}
          </Heading>
        </Flex>
        <Button
          variant="outlinedPrimary"
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover,&:focus': { color: 'white', borderColor: 'white' },
            textShadow: '0 0 2px rgba(255, 255, 255, 0.5)',
          }}
          onClick={() => router.push(blok.buttonLink.cached_url)}
        >
          <Text sx={{ fontSize: ['md', 'lg'] }}>{blok.buttonLabel}</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
