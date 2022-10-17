import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homepage from './src/views/homepage';
import Details from './src/views/details';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Extrato" component={Homepage} />
        <Stack.Screen name="Comprovante" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
