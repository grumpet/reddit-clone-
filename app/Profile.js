import { View, Text ,Image} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View>
      <Text>Profile</Text>
      <Image 
  source={{uri: 'https://m33t.app/users/663b6468a2df8a6bcd711e3b/photo'}} 
  style={{width: 100, height: 100}} 
  borderwidth={1} 
  borderRadius={100}
  bordercolor='black'  
/>
    </View>
  )
}

export default Profile