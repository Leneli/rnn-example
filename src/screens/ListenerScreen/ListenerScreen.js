import React, { useEffect } from 'react';
import { Navigation } from 'react-native-navigation';
import { ScreenContent } from '../../components/ScreenContent';

const ListenerScreen = ({ componentId }) => {
  useEffect(() => {
    const listener = {
      componentWillAppear: () => {
        console.log('RNN', `componentWillAppear`);
        alert('componentWillAppear');
      },
      componentDidAppear: () => {
        console.log('RNN', `componentDidAppear`);
        alert('componentDidAppear');
      },
      componentDidDisappear: () => {
        console.log('RNN', `componentDidDisappear`);
        alert('componentDidDisappear');
      },
    };

    // Register the listener to all events related to our component
    const componentListener = Navigation.events().registerComponentListener(listener, componentId);

    // Buttons events
    const buttonsListener = Navigation.events().registerNavigationButtonPressedListener((event) => {
      alert(`Click to button ${event.buttonId}`);
    })

    return () => {
      // Make sure to unregister the listener during cleanup
      componentListener.remove();

      //
      buttonsListener.remove()
    };
  }, []);

  return (
    <ScreenContent
      title="Listener Screen"
      description="ListenerScreen"
    />
  );
};

export default ListenerScreen;
