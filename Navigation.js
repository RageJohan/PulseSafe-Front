import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreenView';
import LoginScreen from './screens/LoginScreenView';
import RegisterScreen from './screens/RegisterScreenView';
import PolicyScreenView from './screens/PolicyScreenView';
import MainScreenView from './screens/MainScreenView';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Policy" component={PolicyScreenView} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={MainScreenView} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}