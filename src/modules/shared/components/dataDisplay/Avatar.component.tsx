import Image, { ImageProps } from 'next/image';
import { Label, Text, Box, BoxProps } from 'theme-ui';

interface AvatarProps extends BoxProps {
  src?: string;
  alt?: string;
}

export const Avatar = ({ src = '', alt = '', sx, ...rest }: AvatarProps) => {
  return (
    <Box
      {...rest}
      sx={{ ...sx, width: 48, height: 48, overflow: 'hidden', position: 'relative', borderRadius: 'full' }}
    >
      <Image src={src} alt={alt} layout="fill" objectFit="cover" />
    </Box>
  );
};
