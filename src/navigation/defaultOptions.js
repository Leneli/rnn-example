import { Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { COLORS } from '../constants/colors';

// TODO: (3) Navigation.setDefaultOptions(options)
export default function () {
  const topBarHeight = Platform.select({
    ios: {},
    android: { elevation: 7 },
  });

  Navigation.setDefaultOptions({
    popGesture: true,

    layout: {
      orientation: ['portrait'],
      componentBackgroundColor: COLORS.lighter,
    },

    statusBar: {
      backgroundColor: COLORS.electricViolet,
    },

    animations: {
      push: {
        waitForRender: true,
      },
      showModal: {
        waitForRender: true,
      },
      setRoot: {
        waitForRender: true,
        alpha: {
          from: 0,
          to: 1,
          duration: 300,
        },
      },
      setStackRoot: {
        waitForRender: true,
        alpha: {
          from: 0,
          to: 1,
          duration: 300,
        },
      },
    },

    topBar: {
      ...topBarHeight,
      background: {
        color:
          Platform.OS === 'ios'
            ? COLORS.white
            : COLORS.electricViolet,
      },
      title: {
        text: 'RNN App',
        fontSize: 24,
        color: Platform.OS === 'ios' ? COLORS.electricViolet : COLORS.white,
      },
      backButton: {
        title: '',
        color: Platform.OS === 'ios' ? COLORS.electricViolet : COLORS.white,
      },
      leftButtonColor:
        Platform.OS === 'ios' ? COLORS.electricViolet : COLORS.white,
      rightButtonColor:
        Platform.OS === 'ios' ? COLORS.electricViolet : COLORS.white,
    },
  });
}
