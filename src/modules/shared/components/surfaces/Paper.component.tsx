import { Box, BoxProps } from 'theme-ui';

interface PaperProps extends BoxProps {
  label?: string;
  onClose?: () => void;
}

export const Paper = ({ sx, ...rest }: PaperProps) => {
  return (
    <Box
      {...rest}
      sx={{
        bg: 'highlight',
        borderRadius: 'xs',
        p: 'md',
        boxShadow: 'sm', // Establece la sombra aquí

        ...sx,
      }}
    />
  );
};
