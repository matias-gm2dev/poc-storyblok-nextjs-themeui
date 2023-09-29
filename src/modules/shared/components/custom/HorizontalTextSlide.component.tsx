import { storyblokEditable, SbBlokData } from '@storyblok/react';
import { useRouter } from 'next/router';
import { Flex, Text } from 'theme-ui';
import { keyframes } from '@emotion/react';

const slideAnim = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(-100vw)',
  },
});

interface BlokProps extends SbBlokData {
  text: string;
}

interface HorizontalTextSlideProps {
  blok: BlokProps;
}

export const HorizontalTextSlide = ({ blok }: HorizontalTextSlideProps) => {
  const router = useRouter();
  return (
    <Flex
      {...storyblokEditable(blok)}
      sx={{
        width: '100%',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        bg: 'secondary',
        py: 'xs'
      }}
    >
      <Text
        sx={{
          animation: `${slideAnim} 50s linear 0s infinite`,
          display: 'inline-block',
          color: 'white',
          letterSpacing: 1.5
        }}
      >
        {blok.text.repeat(35)}
      </Text>
    </Flex>
  );
};
