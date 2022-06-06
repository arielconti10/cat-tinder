import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import type { Routes } from './src/Routes';
import Home from './src/screens/Home';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  NunitoSans_400Regular as Nunito,
} from '@expo-google-fonts/nunito-sans';

const Stack = createStackNavigator<Routes>();
export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}