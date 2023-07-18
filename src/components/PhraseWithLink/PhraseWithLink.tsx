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
          <React.Fragment key={`part-${index}`}>
            <StyledText>{part}</StyledText>
            <StyledTouchableOpacity onPress={handlePress}>
              <StyledHiperlink>{tagAction}</StyledHiperlink>
            </StyledTouchableOpacity>
          </React.Fragment>
        );
      } else {
        return <Text key={`part-${index}`}>{part}</Text>;
      }
    });

    return elements;
  };

  return <StyledContainer>{renderClickableText()}</StyledContainer>;
};

export default PhraseWithAction;
