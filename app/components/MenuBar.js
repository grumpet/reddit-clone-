import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // You can use any icon library

const MenuBar = () => {
return (
    <View style={styles.menuBar}>
        <Ionicons name="menu" size={24} color="white" />
        <TextInput style={styles.searchBar} placeholder="Search..."  placeholderTextColor="white" />
        <View style={styles.rightIcons}>
            <Ionicons name="chatbubble" size={24} color="white" /> 
            <Ionicons name="add" size={24} color="white"/>
            <Ionicons name="notifications" size={24} color="white" />
            <Ionicons name="person" size={24} color="white"/>
        </View>
    </View>
);
};

const styles = StyleSheet.create({
  menuBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'black',
    borderBlockEndColor : 'white',
    borderWidth: 0.1

  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end', 
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
    backgroundColor: '#181818',
    borderRadius: 20,
    marginLeft: 10,
    marginRight: 10,
    
  },

  rightIcons:{
    flexDirection: 'row',
    justifyContent: 'flex-end', // Added this line
    flex: 0.1

  }
});

export default MenuBar;