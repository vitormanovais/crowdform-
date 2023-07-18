import {TouchableOpacity} from 'react-native';
import {StyledContainer, StyledText} from './ButtonStyles';

interface HeaderProps {
  title: string;
  disabled?: boolean;
  onPress: () => void;
}

const Button: React.FC<HeaderProps> = ({title, disabled = false, onPress}) => (
  <StyledContainer disabled={disabled} onPress={onPress}>
    <StyledText>{title}</StyledText>
  </StyledContainer>
);

export default Button;
