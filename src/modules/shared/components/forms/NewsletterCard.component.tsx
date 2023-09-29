import { Box, Button, Flex, Heading, Label } from 'theme-ui';
import { TextField } from './TextField.component';

export const NewsletterCard = () => {
  return (
    <Box
      sx={{
        p: ['md', 'lg'],
        backgroundColor: 'white',
        borderRadius: 'md',
      }}
    >
      <Flex
        sx={{
          alignItems: 'flex-end',
          gap: 'md',
          flexDirection: ['column', 'row'],
        }}
      >
        <Flex
          sx={{
            flexDirection: 'column',
            gap: 'xs',
          }}
        >
          <Heading as="h4">Subscribe to Newsletter</Heading>
          <TextField placeholder="jhon@mail.com" />
        </Flex>
        <Button variant="containedPrimary">Submit</Button>
      </Flex>
    </Box>
  );
};
