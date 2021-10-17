import React from 'react';
import { Button } from '../../components/Button';
import { ScreenContent } from '../../components/ScreenContent';
import { navigateToAnimatedScreen } from '../AnimatedScreen/navigate';
import { navigateToListenerScreen } from '../ListenerScreen/navigate';

const ThirdScreen = ({ componentId }) => {
  return (
    <ScreenContent
      title="Third Screen"
      description="Third Screen"
    >
      <>
        <Button title="Listeners" onPress={() => navigateToListenerScreen(componentId)} />
        <Button title="Animation" onPress={() => navigateToAnimatedScreen(componentId)} />
      </>
    </ScreenContent>
  );
};

export default ThirdScreen;
