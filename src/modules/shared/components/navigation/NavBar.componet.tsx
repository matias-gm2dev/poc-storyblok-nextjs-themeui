import { SbBlokData, StoryblokComponent, storyblokEditable } from '@storyblok/react';
import { Box, Container, Flex, Image, MenuButton } from 'theme-ui';
import { useState } from 'react';
import { Popover } from 'react-tiny-popover';

interface BlokProps extends SbBlokData {
  links: SbBlokData[];
  logo: any;
  logoAlt: string;
}

interface NavbarProps {
  blok: BlokProps;
}

export const NavBar = ({ blok }: NavbarProps) => {
  console.log(blok);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const Content = () =>
    blok.links?.map((nestedBlok: SbBlokData) => <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />);

  return (
    <Flex {...storyblokEditable(blok)} sx={{ height: '4rem', px: 'md', py: 'xs', alignItems: 'center' }}>
      <Container>
        <Flex sx={{ alignItems: 'center' }}>
          <Image src={blok.logo.filename} alt={blok.logoAlt} sx={{ maxHeight: '3.5rem' }} />
          <Flex sx={{ flex: 1 }} />
          <Flex sx={{ gap: 'xs', display: ['none', 'flex'] }}>
            <Content />
          </Flex>
          <Popover
            isOpen={isPopoverOpen}
            positions={['bottom', 'right']}
            padding={10}
            onClickOutside={() => setIsPopoverOpen(false)}
            content={({ position }: any) => {
              return (
                <Flex
                  sx={{
                    flexDirection: 'column',
                    bg: 'background',
                    px: 'sm',
                    py: 'md',
                    borderRadius: 'xs',
                    boxShadow: 'md',
                    zIndex: 'dropdown',
                    width: 'max-content',
                    height: 'max-content',
                    position: 'absolute',
                    top: '100%', // Centro verticalmente
                    left: '100%', // A la derecha del botón
                    transform: 'translate(-90%,0)', // Alineación con el botón
                  }}
                >
                  <Content />
                </Flex>
              );
            }}
          >
            <MenuButton sx={{ display: ['block', 'none'] }} onClick={handleButtonClick} />
          </Popover>
        </Flex>
      </Container>
    </Flex>
  );
};
