import { bottomTabOptions } from '../bottomTabOptions';
import * as SCREENS from '../screenIds';

export const MainStack = {
  stack: {
    children: [
      {
        component: {
          name: SCREENS.MAIN_SCREEN,
        },
      },
    ],
    options: {
      bottomTab: {
        text: 'Main',
        icon: { system: 'wand.and.rays' },
        ...bottomTabOptions,
      },
    },
  },
};
