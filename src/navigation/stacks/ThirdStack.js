import { bottomTabOptions } from '../bottomTabOptions';
import * as SCREENS from '../screenIds';

export const ThirdStack = {
  stack: {
    children: [
      {
        component: {
          name: SCREENS.THIRD_SCREEN,
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Third',
        icon: { system: 'gear' },
        ...bottomTabOptions,
      },
    },
  },
};
