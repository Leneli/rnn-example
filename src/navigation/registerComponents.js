import { Navigation } from 'react-native-navigation';
import { CustomTopBar } from '../components/CustomTopBar';
import { Avatar } from '../components/Avatar';
import * as COMPONENT_IDS from './components';

const Components = new Map();

Components.set(COMPONENT_IDS.TOP_BAR, CustomTopBar);
Components.set(COMPONENT_IDS.AVATAR, Avatar);

export default function () {
  Components.forEach((C, key) => {
    Navigation.registerComponent(key, () => C);
  });
}
