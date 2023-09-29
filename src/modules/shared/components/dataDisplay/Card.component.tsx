import Image from 'next/image';
import { CardProps as ThemeUICardProps, Text, Card as ThemeUICard, Box, Heading, Flex, Button } from 'theme-ui';

interface CardProps extends ThemeUICardProps {
  label?: string;
  onClose?: () => void;
}

export const Card = ({ label, onClose, ...rest }: CardProps) => {
  return (
    <ThemeUICard {...rest} sx={{ width: 280, display: 'flex', flexDirection: 'column', gap: 'xs' }}>
      <Box sx={{ width: '100%', height: 180, overflow: 'hidden', position: 'relative', borderRadius: 'xs' }}>
        <Image src="/goddess.jpg" layout="fill" objectFit="cover" alt="Card" />
      </Box>
      <Heading as="h3">Lorem Ipsum</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec
        augue elit, rhoncus ac sodales
      </Text>
      <Flex sx={{ justifyContent: 'flex-end', gap: 'md', mt: 'md' }}>
        <Button variant="outlinedPrimary">Cancel</Button>
        <Button variant="containedPrimary">Buy</Button>
      </Flex>
    </ThemeUICard>
  );
};
