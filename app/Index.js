// Index.js
import { View, Text, Pressable,Image ,StyleSheet} from 'react-native';
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
<View style={styles.container}>




</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  continue_button: {
    backgroundColor: '#0099ff',
    borderRadius: 20,
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  transparentcontiainersmall: {
    flex: 0.1,
    backgroundColor: 'transparent',
    height: '50%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  transparentcontiainer: {
    flex: 2,
    backgroundColor: 'transparent',
    height: '50%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_register: {
    color: 'white',
    fontSize: 15,
    width: '90%',
    flex: 2,
  },
  SignUpContainer: {
    flex: 2,
    width: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  head_register: {
    flex: 1,
    width: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body_register: {
    flex: 2,
    width: '100%',
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    color: 'white',
    borderRadius: 10,
    paddingLeft: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  text_register: {
    color: 'white',
    fontSize: 15,
    width: '90%',
    flex: 2,
  },
  transparentcontiainersmall: {
    flex: 0.1,
    backgroundColor: 'transparent',
    height: '50%',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default Index;