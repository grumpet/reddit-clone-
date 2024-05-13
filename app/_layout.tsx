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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerLayout() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer" component={Drawer_Menu} options={{headerShown:false}}/>
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
        <Stack.Screen name="Drawer" component={DrawerLayout}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}