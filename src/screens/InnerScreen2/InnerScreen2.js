import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Button } from '../../components/Button';
import { ScreenContent } from '../../components/ScreenContent';

const InnerScreen2 = ({ componentId }) => {
  return (
    <ScreenContent
      title={"Inner Screen"}
      description="Basic navigation"
    >
      <Button title="Go back to root" onPress={() => Navigation.popToRoot(componentId)} />
    </ScreenContent>
  );
};

export default InnerScreen2;
