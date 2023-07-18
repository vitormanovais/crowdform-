import styled from 'styled-components/native';

export const StyledInput = styled.TextInput<{error: boolean}>`
  background-color: #f4f4f4;
  color: ${props => (props.error ? '#ff0000' : '#000000')};
`;

export const StyledInputContainer = styled.View<{error: boolean}>`
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  border-radius: 4px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-width: ${props => (props.error ? '1px' : '0px')};
  border-color: #ff0000;
`;

export const StyledContainer = styled.View`
  margin: 20px;
`;

export const StyledLabel = styled.Text<{error: boolean}>`
  font-size: 11px;
  line-height: 14.33px;
  font-family: Sintony;
  color: ${props => (props.error ? '#ff0000' : '#a0a0a0')};
  margin-bottom: 5px;
`;
