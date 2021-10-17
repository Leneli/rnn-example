import { Navigation } from 'react-native-navigation';
import { MODAL_SCREEN } from '../../navigation/screenIds';

export const openModal = () => {
  Navigation.showModal({
    stack: {
      children: [{
        component: {
          name: MODAL_SCREEN,
          passProps: {
            text: 'stack with one child'
          },
          options: {
            topBar: {
              title: {
                text: 'Modal'
              }
            }
          }
        }
      }]
    }
  });
};
