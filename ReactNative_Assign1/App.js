import React from "react"
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AccountScreen from "./src/screens/AccountScreen";
import SignInScreen from "./src/screens/SignInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";
import TrackScreen from "./src/screens/TrackScreen";
import UserDetailScreen from "./src/screens/UserDetailScreen";
import UserListScreen from "./src/screens/UserListScreen";
import  { Provider as AuthProvider } from "./src/context/AuthContext";
import { setNavigator } from "./src/navigationRef";
import VideoPhotoScreen from "./src/screens/VideoPhotoScreen";

const navigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signin: SignInScreen,
    Signup: SignUpScreen, 
  }),
  mainFlow: createBottomTabNavigator({
    UserDetailsFlow: createStackNavigator({
      UserList: UserListScreen,
      UserDetails: UserDetailScreen,
    }),
    TrackCreate: TrackScreen,
      Account: AccountScreen,
      Recording:VideoPhotoScreen
  })
})

const App = createAppContainer(navigator);
export default () => {
  return (
<AuthProvider>
  <App ref={(navigator)=> {setNavigator(navigator)}}/>
</AuthProvider>
  );
};