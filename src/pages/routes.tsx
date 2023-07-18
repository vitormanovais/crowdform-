// Routes.tsx

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import LoginScreen from './Login';
import SignUpScreen from './SignUp';
// import HomeScreen from './Home/pages/Home';
// import TradeScreen from './Home/pages/Trade';
// import PortfolioScreen from './Home/pages/Portfolio';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
};

type HomeTabParamList = {
  Home: undefined;
  Trade: undefined;
  Portfolio: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<HomeTabParamList>();

// const HomeTabs = () => {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Trade" component={TradeScreen} />
//       <Tab.Screen name="Portfolio" component={PortfolioScreen} />
//     </Tab.Navigator>
//   );
// };

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        {/* <Stack.Screen name="Home" component={HomeTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
