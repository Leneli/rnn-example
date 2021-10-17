import { Navigation } from "react-native-navigation";
import { LISTENER_SCREEN } from "../../navigation/screenIds";

export const navigateToListenerScreen = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: LISTENER_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Listener',
          },
          rightButtons: [
            {
              id: 'RightButton',
              text: 'Bump',
            },
          ],
        },
      },
    },
  });
};
