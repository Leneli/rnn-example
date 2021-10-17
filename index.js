import { Navigation } from 'react-native-navigation';
import { BottomTabs } from './src/navigation/BottomTabs';
import registerScreens from './src/navigation/registerScreens';
import defaultOptions from './src/navigation/defaultOptions';
import registerComponents from './src/navigation/registerComponents';

registerScreens();
registerComponents();

// TODO: (2) Navigation.events().registerAppLaunchedListener
Navigation.events().registerAppLaunchedListener(async () => {
  defaultOptions();

  // TODO: (4) Navigation.setRoot
  BottomTabs();
});
