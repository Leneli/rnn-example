import { Navigation } from 'react-native-navigation';
import { MainStack } from './stacks/MainStack';
import { SecondStack } from './stacks/SecondStack';
import { ThirdStack } from './stacks/ThirdStack';

Navigation.events().registerBottomTabSelectedListener(({ selectedTabIndex }) => {
  console.log('selectedTabIndex :>> ', selectedTabIndex);
});

const BottomTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BOTTOM_TABS',
        options: {
          bottomTabs: {
            currentTabIndex: 1,
            titleDisplayMode: 'alwaysShow',
            preferLargeIcons: true,
          },
        },
        children: [SecondStack, MainStack, ThirdStack],
      },
    },
  });
};

export { BottomTabs };
