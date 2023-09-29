import { Flex, Input, InputProps, Label, Text } from 'theme-ui';

interface TextFieldProps extends InputProps {
  label?: string;
  error?: string;
}

export const TextField = ({ label, error, ...rest }: TextFieldProps) => {
  return (
    <Flex sx={{ flexDirection: 'column', gap: 'xs' }}>
      {label && <Label>{label}</Label>}
      <Input {...rest} />
      {error && <Text sx={{ color: 'textError', lineHeight: 'tight' }}>{error}</Text>}
    </Flex>
  );
};
