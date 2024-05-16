import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const Settings = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Pressable
          style={({ pressed }) => [
            styles.buttonContainer,
            { backgroundColor: pressed ? '#3928A5' : hoveredButton === 1 ? '#3928A5' : '#473BF0' }
          ]}
          onPress={() => {}}
          onMouseEnter={() => setHoveredButton(1)}
          onMouseLeave={() => setHoveredButton(null)}
          >
          <Text style={styles.buttonText}>Button 1</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>Button 2</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>Button 3</Text>
        </Pressable>
      </View>
      <View style={styles.row}>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>Button 4</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>Button 5</Text>
        </Pressable>
        <Pressable style={styles.buttonContainer} onPress={() => {}}>
          <Text style={styles.buttonText}>Button 6</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
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