import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Button } from '../../components/Button';
import { ScreenContent } from '../../components/ScreenContent';

const AnimatedScreen = ({ componentId }) => {
  return (
    <ScreenContent
      title="Animated Screen"
      description="Animated Screen"
    >
      <Button title="Go back" onPress={() => Navigation.pop(componentId)} />
    </ScreenContent>
  );
};

export default AnimatedScreen;
