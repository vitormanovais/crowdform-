import React, {useState} from 'react';
import {
  StyledContainer,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './InputFieldStyles';
import {TouchableOpacity} from 'react-native';
import IconSvg from '../IconSvg';

const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  label,
  value,
  keyboardType,
  onChange,
  password,
}) => {
  const [state, setState] = useState<string>(value ?? '');
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTextChange = (text: string) => {
    onChange ? onChange(text) : setState(text);
  };

  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <StyledInputContainer>
        <StyledInput
          secureTextEntry={showPassword}
          keyboardType={keyboardType}
          value={state}
          placeholder={placeholder}
          onChangeText={handleTextChange}
        />
        {password && (
          <TouchableOpacity onPress={handleTogglePasswordVisibility}>
            <IconSvg
              name={showPassword ? 'closedEye' : 'openedEye'}
              width={18.33}
              height={13.33}
            />
          </TouchableOpacity>
        )}
      </StyledInputContainer>
    </StyledContainer>
  );
};

export default InputField;
