import {StyledContainer, StyledText} from './HeaderStyles';

interface HeaderProps {
  text: string;
}

const Header = ({text}: HeaderProps) => (
  <StyledContainer>
    <StyledText>{text}</StyledText>
  </StyledContainer>
);

export default Header;
