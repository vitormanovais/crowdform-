import styled from 'styled-components/native';

export const StyledText = styled.Text`
  font-size: 16px;
  line-height: 25.93px;
  font-family: Sitara;
  color: #ffffff;
`;

export const StyledContainer = styled.TouchableOpacity`
  padding: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.disabled ? '#d9b9fa ' : '#770fdf ')};
  border-radius: 4px;
  margin: 20px;
`;
