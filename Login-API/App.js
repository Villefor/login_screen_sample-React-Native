import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from './context/context';
import LoginScreen from './screens/LoginScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="List" component={ListScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
