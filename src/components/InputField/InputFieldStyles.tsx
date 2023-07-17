import styled from 'styled-components/native';

export const StyledInput = styled.TextInput`
  background-color: #f4f4f4;
  color: #000000;
  ::placeholder {
    color: #cfcfcf;
  }
`;

export const StyledInputContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
  border-radius: 4px;
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledContainer = styled.View`
  margin: 20px;
`;

export const StyledLabel = styled.Text`
  font-size: 11px;
  line-height: 14.33px;
  font-family: Sintony;
  color: #a0a0a0;
  margin-bottom: 5px;
`;
