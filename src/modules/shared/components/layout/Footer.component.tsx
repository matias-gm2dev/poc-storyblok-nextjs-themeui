/* eslint-disable jsx-a11y/aria-props */
import { Box, Button, Container, Divider, Flex, Heading, Text, Image, IconButton } from 'theme-ui';
import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { TextField } from '../forms/TextField.component';
import { Icon } from '../icomoon/Icon.component';

interface BlokProps extends SbBlokData {
  logo: any;
  logoAlt: string;
}

interface FooterProps {
  blok: BlokProps;
}

export const Footer = ({ blok }: FooterProps) => {
  return (
    <Box
      sx={{
        bg: 'darken',
        p: ['md', 'lg'],
      }}
      {...storyblokEditable(blok)}
    >
      <Container sx={{ display: 'flex', flexDirection: 'column', gap: 'lg' }}>
        <Flex
          sx={{
            justifyContent: ['center', 'space-between'],
            alignItems: 'center',
            gap: 'lg',
            flexDirection: ['column', 'row'],
            width: '100%',
          }}
        >
          <Flex sx={{ flex: 1, alignItems: 'center' }}>
            <Image src={blok.logo.filename} alt={blok.logoAlt} sx={{ maxHeight: '1.5rem' }} />
          </Flex>
          <Flex
            sx={{
              alignItems: ['stretch', 'flex-end'],
              gap: 'md',
              flexDirection: ['column', 'row'],
              width: ['100%', 'fit-content'],
            }}
          >
            <Flex
              sx={{
                flexDirection: 'column',
                gap: 'xs',
              }}
            >
              <Heading as="h4">Subscribe to Newsletter</Heading>
              <TextField placeholder="jhon@mail.com" sx={{ width: '100%' }} />
            </Flex>
            <Button variant="containedPrimary" sx={{ alignSelf: 'flex-end' }}>
              Submit
            </Button>
          </Flex>
        </Flex>
        <Box>
          <Divider />
          <Flex sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Text>&copy; {new Date().getFullYear()}</Text>
            <Flex>
              <IconButton aria-aria-label="Facebook">
                <Icon icon="facebook" />
              </IconButton>
              <IconButton aria-aria-label="Tiktok">
                <Icon icon="tiktok" />
              </IconButton>
              <IconButton aria-aria-label="Instagram">
                <Icon icon="instagram" />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};
