import {TouchableOpacity} from 'react-native';
import {StyledContainer, StyledText} from './ButtonStyles';

interface HeaderProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<HeaderProps> = ({title, onPress}) => (
  <TouchableOpacity>
    <StyledContainer>
      <StyledText>{title}</StyledText>
    </StyledContainer>
  </TouchableOpacity>
);

export default Button;
