import { Navigation } from 'react-native-navigation';
import { INNER_SCREEN2 } from '../../navigation/screenIds';

export const navigateToInnerScreen2 = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: INNER_SCREEN2,
      options: {
        topBar: {
          title: {
            text: 'Inner Page #2',
          },
        },
      },
    },
  });
};
