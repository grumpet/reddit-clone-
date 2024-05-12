import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Index from './Index';
import Chat from './Chat';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import Settings from './Settings';
import RegisterPassword from './RegisterPassword';
const Stack = createStackNavigator();

function Layout() {
  
    return (

      <Stack.Navigator>
        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterPassword" component={RegisterPassword} options={{ headerShown: false }}/>
      </Stack.Navigator>


    );
  }

export default Layout;