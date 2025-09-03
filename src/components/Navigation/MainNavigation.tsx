import { NavigationContainer } from '@react-navigation/native';
import Header from '../Header/Header';
import { createStackNavigator } from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from '../Home/Home';
import Newtask from '../NewTask/Newtask';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  [Routes.Home]: undefined;
  [Routes.NewTask]: undefined;
  [Routes.Tasks]: undefined;
};
const CustomHeader = () => <Header />;

const Stack = createStackNavigator<RootStackParamList>();

export default function MainNavigation() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{
          header: CustomHeader,
        }}
      >
        <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.NewTask} component={Newtask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
