import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Drawer_Menu from './Drawer_Menu';
import Index from './Index';
import Chat from './Chat';
import Profile from './Profile';
import Login from './Login';
import Register from './Register';
import Settings from './Settings';
import RegisterPassword from './RegisterPassword';
import { useWindowDimensions } from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerLayout() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
    <Drawer.Navigator
    screenOptions={{
      drawerType: isLargeScreen ? 'permanent' : 'back',
      drawerStyle: isLargeScreen ? null : { width: '100%' },
    }}>
      <Drawer.Screen name="Drawer" component={Index} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
}



export default function Layout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>

        <Stack.Screen name="Index" component={Index} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="RegisterPassword" component={RegisterPassword} options={{ headerShown: false }}/>
        <Stack.Screen name="Drawer" component={DrawerLayout} options={{headerShown: false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}