import { SbBlokData } from '@storyblok/react';
import { Box, Button, Container, Flex, Grid, Heading, Text } from 'theme-ui';
import NextImage from 'next/image';
import { Icon } from '../icomoon/Icon.component';

interface BlokProps extends SbBlokData {
  largeImage: any;
  fistImageSmall: any;
  secondImageSmall: any;
  title: string;
  text: string;
  linkText: string;
  link: string;
}

interface ImageGridProps {
  blok: BlokProps;
}
const Overlay = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'primaryDark',
      opacity: 0.5,
    }}
  />
);
export const ImageGrid = ({ blok }: ImageGridProps) => {
  return (
    <Container sx={{ px: 'md'}}>
      <Grid
        sx={{
          gridTemplateRows: ['repeat(4, 1fr)','repeat(3, 1fr)'],
          gridTemplateColumns: ['1','repeat(2, 1fr)'],
          gap: 'lg',
        }}
      >
        <Box
          sx={{
            gridColumn: '1 / 2',
            gridRow: 'span 3',
            bg: 'muted',
            borderRadius: 'md',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <NextImage src={blok.largeImage?.filename} alt={''} objectFit="cover" layout="fill" />
          <Overlay />
        </Box>

        <Box
          sx={{
            bg: 'muted',
            minHeight: 320,
            borderRadius: 'md',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <NextImage src={blok.fistImageSmall?.filename} alt={''} objectFit="cover" layout="fill" />
          <Overlay />
        </Box>
        <Box
          sx={{
            bg: 'muted',
            minHeight: 320,
            borderRadius: 'md',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <NextImage src={blok.secondImageSmall?.filename} alt={''} objectFit="cover" layout="fill" />
          <Overlay />
        </Box>
        <Flex
          sx={{
            bg: 'primaryDark',
            minHeight: 320,
            borderRadius: 'md',
            flexDirection: 'column',
            p: ['md','lg'],
          }}
        >
          <Flex
            sx={{
              flexDirection: 'column',
              flex: 1,
              color: 'white',
              gap: 'sm',
            }}
          >
            <Heading as="h2">{blok.title}</Heading>
            <Text>{blok.text}</Text>
          </Flex>
          <Flex sx={{ justifyContent: 'flex-end' }}>
            <Button
              variant="text"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                fontSize: 'lg',
                '&:hover, &:focus': {
                  color: 'white',
                },
              }}
            >
              {blok.linkText}
              <Icon icon="chevron-right" size="2rem" />
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </Container>
  );
};
