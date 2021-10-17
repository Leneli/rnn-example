import React from 'react';
import { Button } from '../../components/Button';
import { ScreenContent } from '../../components/ScreenContent';
import { navigateToInnerScreen } from '../InnerScreen/navigate';
import { openModal } from '../ModalScreen/navigate';
import { openOverlay } from '../Overlay/navigate';

const MainScreen = ({ componentId }) => {
  return (
    <ScreenContent
      title={"Main Screen"}
      description="Basic navigation"
    >
      <>
        <Button title="Go to next screen" onPress={() => navigateToInnerScreen(componentId)} />
        <Button title="Open modal" onPress={() => openModal()} />
        <Button title="Show overlay" onPress={() => openOverlay()} />
      </>
    </ScreenContent>
  );
};

export default MainScreen;
