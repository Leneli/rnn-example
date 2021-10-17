import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Button } from '../../components/Button';
import { ScreenContent } from '../../components/ScreenContent';
import { navigateToInnerScreen2 } from '../InnerScreen2/navigate';

const InnerScreen = ({ componentId }) => {
  return (
    <ScreenContent
      title={"Inner Screen"}
      description="Basic navigation"
    >
      <>
        <Button title="Next" onPress={() => navigateToInnerScreen2(componentId)} />
        <Button title="Go back" onPress={() => Navigation.pop(componentId)} />
      </>
    </ScreenContent>
  );
};

export default InnerScreen;
