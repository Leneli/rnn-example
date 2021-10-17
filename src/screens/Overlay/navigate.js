import { Navigation } from 'react-native-navigation';
import { OVERLAY } from '../../navigation/screenIds';

export const openOverlay = () => {
  Navigation.showOverlay({
    component: {
      name: OVERLAY,
      options: {
        layout: {
          componentBackgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        overlay: {
          interceptTouchOutside: true
        }
      }
    }
  });
};
