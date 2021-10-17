import { Navigation } from 'react-native-navigation';
import { ANIMATED_SCREEN } from '../../navigation/screenIds';

export const navigateToAnimatedScreen = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: ANIMATED_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Animated Screen',
          },
        },
        animations: {
          push: {
            content: {
              translationY: {
                from: require('react-native').Dimensions.get('window').height,
                to: 0,
                duration: 300
              }
            }
          },
          pop: {
            content: {
              translationY: {
                from: 0,
                to: -require('react-native').Dimensions.get('window').height,
                duration: 300
              }
            }
          }
        },
      },
    },
  });
};
