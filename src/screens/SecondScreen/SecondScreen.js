import React, { useState } from 'react';
import { Text } from 'react-native'
import { Navigation } from 'react-native-navigation';
import { Button } from '../../components/Button';
import { ScreenContent } from '../../components/ScreenContent';
import { navigateToTopBarScreen } from '../TopBarScreen/navigate';

const SecondScreen = ({ componentId, text }) => {
  const [counterProp, setCounterProp] = useState(1);
  const [counterOption, setCounterOption] = useState(1);

  return (
    <ScreenContent
      title="Second Screen"
      description="Props and Options"
    >
      <>
        <Text>Text: {text}</Text>
        <Button title="updateProps" onPress={() => {
          Navigation.updateProps(componentId, { text: `Updated text (${counterProp})` });
          setCounterProp(counterProp + 1);
        }} />

        <Button title="mergeOptions" onPress={() => {
          Navigation.mergeOptions(componentId, {
            topBar: {
              title: {
                text: `New Screen title #${counterOption}`,
              },
            },
          });
          setCounterOption(counterOption + 1);
        }} />

        <Button title="Go to Screen with custom top bar" onPress={() => {
          navigateToTopBarScreen(componentId, { titleText: 'Screen title with custom top bar' })
        }} />
      </>
    </ScreenContent>
  );
};

export default SecondScreen;
