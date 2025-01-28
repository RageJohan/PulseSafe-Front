import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreenView';
import LoginScreen from './screens/LoginScreenView';
import RegisterScreen from './screens/RegisterScreenView';
import PolicyScreenView from './screens/PolicyScreenView';
import MainScreenView from './screens/MainScreenView';
import PressureScreenView from './screens/PressureScreenView';
import ProfileScreenView from './screens/ProfileScreenView';
import NotificationScreenView from './screens/NotificationScreenView';
import PersonalScreenView from './screens/PersonalScreenView';
import SettingScreenView from './screens/SettingScreenView';
import HelpScreenView from './screens/HelpScreenView';
import ChangePasswordScreenView from './screens/ChangePasswordScreenView';
import DeleteAccountScreenView from './screens/DeleteAccountScreenView';

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
                <Stack.Screen name="Pressure" component={PressureScreenView} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={ProfileScreenView} options={{ headerShown: false }} />
                <Stack.Screen name="Notification" component={NotificationScreenView} options={{ headerShown: false }} />
                <Stack.Screen name="Personal" component={PersonalScreenView} options={{ headerShown: false }} />
                <Stack.Screen name="Setting" component={SettingScreenView} options={{ headerShown: false }} />  
                <Stack.Screen name="Help" component={HelpScreenView} options={{ headerShown: false }} />
                <Stack.Screen name="ChangePassword" component={ChangePasswordScreenView} options={{ headerShown: false }} /> 
                <Stack.Screen name="DeleteAccount" component={DeleteAccountScreenView} options={{ headerShown: false }} />           
            </Stack.Navigator>
        </NavigationContainer>
    );
}