import { Alert as ThemeUIAlert, Flex, Label, Text, AlertProps as ThemeUIAlertProps, Close } from 'theme-ui';

interface AlertProps extends ThemeUIAlertProps {
  label?: string;
  onClose?: () => void;
}

export const Alert = ({ label, onClose, ...rest }: AlertProps) => {
  return (
    <ThemeUIAlert {...rest}>
      Beep boop, this is an info alert!
      <Close sx={{ ml: 'auto', mr: '-sm' }} onClick={onClose} />
    </ThemeUIAlert>
  );
};
