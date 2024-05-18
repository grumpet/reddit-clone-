import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const Button = ({ number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        { backgroundColor: pressed ? '#3928A5' : isHovered ? '#3928A5' : '#473BF0' }
      ]}
      onPress={() => {}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Text style={styles.buttonText}>{number}</Text>
    </Pressable>
  );
};

const Settings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button number={"logout"} />
        <Button number={"dark-mode"} />
        <Button number={"delete-user"} />
      </View>
      <View style={styles.row}>
        <Button number={4} />
        <Button number={5} />
        <Button number={6} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000500',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', // Align items in a column
  },
  row: {
    flexDirection: 'row', // Align items in a row
    marginBottom: '2%', // Add some space between the rows
  },
  buttonContainer: {
    width: 200, // Set width and height to be the same
    height: 200, // Set width and height to be the same
    margin: 20,
    backgroundColor: '#473BF0',
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center', // Center the text horizontally
    borderRadius: 20,
    
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  // ... rest of your styles
});

export default Settings