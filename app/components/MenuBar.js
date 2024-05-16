import React,{useState} from 'react'
import { View, TextInput, StyleSheet ,Text} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library
import { useNavigation } from '@react-navigation/native';

const MenuBar = ({ }) => {
  const [isFocused, setIsFocused] = useState(false);
  const navigation = useNavigation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

return (
    <View style={styles.menuBar}>
    
        <Ionicons 
        name="menu"
        size={24}
        color="white"
        onPress={
          () => {
            if(isDrawerOpen){
              navigation.navigate('Drawer');
              setIsDrawerOpen(false);
            }else{
              navigation.navigate('Index');
              setIsDrawerOpen(true);
            }
          }
        }/>

        <TextInput style={styles.searchBar} placeholder={isFocused? '':"Search..." } onFocus={()=>setIsFocused(true)} onBlur={()=> setIsFocused(false)} placeholderTextColor="white" />
        <View style={styles.rightIcons}>
            <Ionicons name="chatbubble" size={24} color="white" onPress={() => navigation.navigate('Chat')} /> 
            <Ionicons name="add" size={24} color="white"/>
            <Ionicons name="notifications" size={24} color="white" />
            <Ionicons name="person" size={24} color="white" onPress={() => navigation.navigate('Profile')}/>
        </View>
    </View>
);
};

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    borderBlockEndColor : 'white',
    borderWidth: 0.1,

  },
  searchBar: {
    justifyContent: 'center', 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#181818',
    borderRadius: 20,
    flex: 0.5,
    alignItems: 'center',
    color: 'white',

  },

  rightIcons:{
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    
  }
});

export default MenuBar;