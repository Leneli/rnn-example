import React from 'react';
import { Text } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Button } from '../../components/Button';
import { ScreenContent } from '../../components/ScreenContent';

const ModalScreen = ({ componentId, text }) => {
  return (
    <ScreenContent
      title={"Modal Screen"}
      description={text}
    >
      <>
        <Button title="CLose this Modal" onPress={() => Navigation.dismissModal(componentId)} />
        <Text>or</Text>
        <Button title="CLose all Modals" onPress={() => Navigation.dismissAllModals()} />
      </>
    </ScreenContent>
  );
};

export default ModalScreen;
