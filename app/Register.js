import { View, Text ,StyleSheet,TextInput , Pressable} from 'react-native'
import React,{useState} from 'react'
import { Link } from 'expo-router';




const Register = ({navigation}) => {
    const [isFocused, setIsFocused] = useState(false);
    
    const [email, setEmail] = useState('');
    const isValidEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
  return (
    <View style={styles.container}>

            <View style={styles.transparentcontiainer}></View>
                <View style={styles.SignUpContainer}>
                    <View style={styles.head_register}>
                        <Text style={styles.title}>Sign Up</Text>
                    </View>
                    <View style={styles.body_register}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder={isFocused ? '' : 'Email'}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        onChangeText={text => setEmail(text)}
                        
                    />
                    <View style={styles.transparentcontiainersmall}></View>

                        <Text style={styles.text_register} >
                            Allready have an account? Press here to <Link href={"Login"} style={{color: '#0099ff'}} >Login</Link>
                        </Text>

                        <Pressable 
                            style={styles.continue_button}
                            onPress={() => {
                                console.log(email);
                                if (!isValidEmail(email)) {
                                    alert('Please enter a valid email');
                                    return;
                                }
                                else{
                                    navigation.navigate('RegisterPassword', { email: email });
                                }

                            }}
                        >
                            <Text style={styles.text}>Continue</Text>
                        </Pressable>
                    </View>
     
                </View>
            <View style={styles.transparentcontiainer}></View>

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
        flex: 0.3,
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


export default Register