import { Textarea as ThemeUITextArea, Flex, Label, Text, TextareaProps } from 'theme-ui';

interface TextAreaProps extends TextareaProps {
  label?: string;
  error?: string;
}

export const TextArea = ({ label, error, ...rest }: TextAreaProps) => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 'xs' }}>
      {label && <Label>{label}</Label>}
      <ThemeUITextArea {...rest} />
      {error && <Text sx={{ color: 'textError', lineHeight: 'tight' }}>{error}</Text>}
    </Flex>
  );
};
