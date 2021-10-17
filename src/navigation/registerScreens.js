import { Navigation } from 'react-native-navigation';
import * as SCREENS_IDS from './screenIds';
import * as Screens from '../screens';

const ScreensMap = new Map();

ScreensMap.set(SCREENS_IDS.MAIN_SCREEN, Screens.MainScreen);
ScreensMap.set(SCREENS_IDS.SECOND_SCREEN, Screens.SecondScreen);
ScreensMap.set(SCREENS_IDS.THIRD_SCREEN, Screens.ThirdScreen);
ScreensMap.set(SCREENS_IDS.INNER_SCREEN, Screens.InnerScreen);
ScreensMap.set(SCREENS_IDS.INNER_SCREEN2, Screens.InnerScreen2);
ScreensMap.set(SCREENS_IDS.MODAL_SCREEN, Screens.ModalScreen);
ScreensMap.set(SCREENS_IDS.OVERLAY, Screens.Overlay);
ScreensMap.set(SCREENS_IDS.TOP_BAR_SCREEN, Screens.TopBarScreen);
ScreensMap.set(SCREENS_IDS.LISTENER_SCREEN, Screens.ListenerScreen);
ScreensMap.set(SCREENS_IDS.ANIMATED_SCREEN, Screens.AnimatedScreen);

// TODO: (1) Navigation.registerComponent('ScreenName', () => ScreenComponent);

export default function registerScreens() {
  ScreensMap.forEach((C, key) => {
    Navigation.registerComponent(
      key,
      () => C,
    );
  });
}
