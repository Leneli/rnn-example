import { Navigation } from 'react-native-navigation';
import { INNER_SCREEN } from '../../navigation/screenIds';

export const navigateToInnerScreen = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: INNER_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Inner Page',
            fontSize: 14,
            fontWeight: 'bold',
          },
          subtitle: {
            text: 'Screen subtitle',
          },
        },
      },
    },
  });
};
