import { Navigation } from 'react-native-navigation';

import Home from './app/components/home/index';
import Friends from './app/components/friends/index';
import Groups from './app/components/Groups/index';
import More from './app/components/More/index';

import tabs from './app/tabs/main';
import drawer from './app/tabs/drawer';

import colors from './app/theme/colors';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Friends', () => Friends);
Navigation.registerComponent('Groups', () => Groups);
Navigation.registerComponent('More', () => More);

const shared_tabs_style = {
  tabBarBackgroundColor: colors.pramiry ,
  tabBarButtonColor: colors.tabsUnSelected ,
  tabBarSelectedButtonColor: colors.secondry,
  selectedTopTabIndicatorHeight: 6,
  selectedTopTabIndicatorColor:colors.pramiry,
};
Navigation.startTabBasedApp({
    tabs: tabs,
    tabsStyle: {
      ...shared_tabs_style
  },
  appStyle: {
    ...shared_tabs_style
  },
drawer: drawer,
});
