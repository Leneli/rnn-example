import { bottomTabOptions } from '../bottomTabOptions';
import * as SCREENS from '../screenIds';

export const SecondStack = {
  stack: {
    children: [
      {
        component: {
          name: SCREENS.SECOND_SCREEN,
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Second',
        icon: { system: 'pencil.and.outline' },
        // icon: require('@app/assets/Images/select.png'),
        ...bottomTabOptions,
      },
    },
  },
};
