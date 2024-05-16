import { View, Text ,StyleSheet,TextInput , Pressable} from 'react-native'
import React,{useState} from 'react'
import axios from 'axios';
const RegisterPassword = ({ route, navigation }) => {
    
async function register(email, username, password) {
    try {
      const response = await axios.post('http://localhost:5000/register', {
        email,
        username,
        password,
      });
  
      console.log(response.data.message);
    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  }
  const { email } = route.params;
  const [isFocused_username, setIsFocused_username] = useState(false);
  const [isFocused_password, setIsFocused_password] = useState(false);
  const [password, setPassword] = useState('');
  //add a function to check if the password is valid
  const [username, setUsername] = useState('');
  return (
    <View style={styles.container}>
                <View style={styles.transparentcontiainer}>
                </View>

                <View style={styles.SignUpContainer}>
                <View style={styles.head_register}>
                  <Text style={styles.title}>Create youre username and password</Text>
                </View>
                <View style={styles.body_register}>
                <TextInput
                        style={styles.TextInput}
                        placeholder={isFocused_username ? '' : 'Username'}
                        onFocus={() => setIsFocused_username(true)}
                        onBlur={() => setIsFocused_username(false)}
                        onChangeText={text => setUsername(text)}
                        
                    />
                    <View style={styles.transparentcontiainersmall}></View>
                    <TextInput
                        style={styles.TextInput}
                        secureTextEntry={true}
                        placeholder={isFocused_password ? '' : 'password'}
                        onFocus={() => setIsFocused_password(true)}
                        onBlur={() => setIsFocused_password(false)}
                        onChangeText={text => setPassword(text)}
                        
                    />
                           
                </View>
                <Pressable 
                            style={styles.continue_button}
                            onPress={() => {
                                console.log(email, username, password);
                                if (email == '' || username == '' || password == '') {
                                    alert('please enter all the fields');
                                    return;
                                }
                                else{
                                    register(email, username, password);
                                    navigation.navigate('Index', { email: email, username: username});
                                }

                            }}
                        >
                          <Text style={styles.text}>Continue</Text>

                        </Pressable>
                </View>
                <View style={styles.transparentcontiainer}>
                </View>


    </View>
  )
}

const styles = StyleSheet.create ({
  text_register: {
      color: 'white',
      fontSize: 15,
      width: '90%',
      flex: 2,

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
  transparentcontiainersmall: {
      flex: 0.1,
      backgroundColor: 'transparent',
      height: '50%',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

  },
  continue_button:{
      flex: 0.4,
      width: '90%',
      backgroundColor: "#473BF0",
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '4%',

  },
  head_register: {
      flex: 0.4,
      backgroundColor: 'transparent',
      width: '100%',
      hight: '10%',
      flexDirection: 'column',
      justifyContent: 'flex',
      alignItems: 'center',
  },
  body_register: {
      flex: 2,
      backgroundColor: 'transparent',
      width: '100%',
      hight: '10%',
      flexDirection: 'column',
      justifyContent: 'flex',
      alignItems: 'center',
  },

  container:{
      flex: 20,
      backgroundColor: 'black',
      height: '100%',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
  },
  SignUpContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#181818',  
      width: 500,
      borderRadius: 20,
      
  },
  text: {
      color: 'white',
      width: '90%',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      alignContent: 'center',
      alignItems: 'center',
      justifyContent: 'center',

  },
  title: {
      width: '90%',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
  },
  TextInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      width: '90%',
      color: 'white',
      backgroundColor: '#303030',
      borderRadius: 10,

  },

  });



export default RegisterPassword