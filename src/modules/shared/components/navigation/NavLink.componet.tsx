import { SbBlokData, storyblokEditable } from '@storyblok/react';
import { useRouter } from 'next/router';
import { Button } from 'theme-ui';

interface BlokProps extends SbBlokData {
  label: string;
  link: any;
}

interface NavbarProps {
  blok: BlokProps;
}

export const NavLink = ({ blok }: NavbarProps) => {
  const router = useRouter();
  const url = blok.link.cached_url ? (blok.link.cached_url === 'home' ? '/' : blok.link.cached_url) : '#';

  return (
    <Button
      onClick={() => router.push(url)}
      variant="text"
      {...storyblokEditable(blok)}
      sx={{
        cursor: 'pointer',
        width: ['100%', 'auto'],
        textAlign: 'left',
        '&:focus': {
          bg: ['highlight', 'transparent'],
        },
      }}
    >
      {blok.label}
    </Button>
  );
};
