import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import PhraseWithLink from './PhraseWithLink';

describe('PhraseWithLink', () => {
  it('should call onPress when link is pressed', () => {
    const navigateMocked = jest.fn();

    const {getByText} = render(
      <PhraseWithLink
        text={'Don’t have an account? Sign up here'}
        tagAction={'Sign up here'}
        onPress={navigateMocked}
      />,
    );
    act(() => {
      const linkElement = getByText('Sign up here');
      fireEvent.press(linkElement);
    });

    expect(navigateMocked).toHaveBeenCalledTimes(1);
  });
});
