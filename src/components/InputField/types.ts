interface InputFieldProps {
  label?: string;
  value?: string;
  placeholder?: string;
  keyboardType?: keyboardType;
  onChange?: (text: string) => void;
  password?: boolean;
  error?: string;
}
type keyboardType =
  | 'default'
  | 'numeric'
  | 'number-pad'
  | 'decimal-pad'
  | 'email-address'
  | 'phone-pad'
  | 'ascii-capable'
  | 'url'
  | 'twitter'
  | 'web-search';
