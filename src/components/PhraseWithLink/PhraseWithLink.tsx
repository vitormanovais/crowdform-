import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {
  StyledContainer,
  StyledHiperlink,
  StyledText,
  StyledTouchableOpacity,
} from './PhraseWithLinkStyles';

const PhraseWithAction: React.FC<PhraseWithActionProps> = ({
  text,
  tagAction,
  onPress,
}) => {
  const handlePress = () => {
    onPress();
  };

  const renderClickableText = () => {
    const parts = text.split(tagAction);
    const elements = parts.map((part, index) => {
      if (index === parts.length - 1) {
        return (
          <>
            <StyledText key={index}>{part}</StyledText>
            <StyledTouchableOpacity onPress={handlePress}>
              <StyledHiperlink>{tagAction}</StyledHiperlink>
            </StyledTouchableOpacity>
          </>
        );
      } else {
        return <Text key={index}>{part}</Text>;
      }
    });

    return elements;
  };

  return <StyledContainer>{renderClickableText()}</StyledContainer>;
};

export default PhraseWithAction;
