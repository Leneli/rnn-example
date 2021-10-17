import { Navigation } from 'react-native-navigation';
import { COLORS } from '../../constants/colors';
import { AVATAR, TOP_BAR } from '../../navigation/components';
import { TOP_BAR_SCREEN } from '../../navigation/screenIds';

export const navigateToTopBarScreen = (componentId, props) => {
  Navigation.push(componentId, {
    component: {
      name: TOP_BAR_SCREEN,
      options: {
        topBar: {
          background: {
            color: COLORS.electricViolet,
          },
          backButton: {
            color: COLORS.white,
          },
          title: {
            component: {
              name: TOP_BAR,
              passProps: props,
              alignment: 'fill',
            },
          },
          rightButtons: [
            {
              id: 'TopBarAvatar',
              component: {
                name: AVATAR,
              },
            },
          ],
        },
      },
    },
  });
};
