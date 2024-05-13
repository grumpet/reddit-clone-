// Index.js
import { View, Text, Pressable,Image } from 'react-native';
import React, { useEffect } from 'react';
import globalStyles from './globalStyles';
import MenuBar from './components/MenuBar'
const Index = ({ route, navigation }) => {
  /*
  useEffect(() => {
    if (route.params === undefined) {
      navigation.navigate('Login');
      console.log('No email or username');
    }

  }, [route.params]);
  */
  return (
<View>
<MenuBar />

    <View style={globalStyles.container}>
      <Text style={globalStyles.text}>Index</Text>
      <Pressable onPress={() => navigation.navigate('Profile')}>
        <Text style={globalStyles.text}>Profile</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={globalStyles.text}>Login</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Register')}>
        <Text style={globalStyles.text}>Register</Text>
      </Pressable>
      <Pressable onPress={() => navigation.navigate('Settings')}>
        <Text style={globalStyles.text}>Settings</Text>
      </Pressable>

    </View>

    </View>
  );
};

export default Index;