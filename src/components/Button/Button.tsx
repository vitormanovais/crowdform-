import {TouchableOpacity} from 'react-native';
import {StyledContainer, StyledText} from './ButtonStyles';

interface HeaderProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
  testId?: string;
}

const Button: React.FC<HeaderProps> = ({
  title,
  disabled = false,
  onPress,
  testId,
}) => (
  <StyledContainer disabled={disabled} onPress={onPress} testID={testId}>
    <StyledText>{title}</StyledText>
  </StyledContainer>
);

export default Button;
