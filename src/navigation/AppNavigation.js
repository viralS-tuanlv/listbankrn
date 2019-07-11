import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from 'react-navigation'

import Home from '../screens/Home'

const DrawerNavigation = createDrawerNavigator({
  Home
})

const AppNavigation = createAppContainer(DrawerNavigation)

export default AppNavigation
