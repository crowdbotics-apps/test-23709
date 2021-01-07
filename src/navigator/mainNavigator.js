import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList190777Navigator from '../features/NotificationList190777/navigator';
import Settings190776Navigator from '../features/Settings190776/navigator';
import Settings190768Navigator from '../features/Settings190768/navigator';
import UserProfile190766Navigator from '../features/UserProfile190766/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList190777: { screen: NotificationList190777Navigator },
Settings190776: { screen: Settings190776Navigator },
Settings190768: { screen: Settings190768Navigator },
UserProfile190766: { screen: UserProfile190766Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
