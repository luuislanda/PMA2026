import { View, Text, Image, Pressable, StyleSheet, Alert } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Interaction Test</Text>

      {/* Example 1: Pressable Image */}
      <Pressable onPress={() => Alert.alert("You clicked the Image!")}>
        <Image 
          source={{ uri: 'https://picsum.photos/200' }} 
          style={styles.image} 
        />
      </Pressable>

      {/* Example 2: Pressable "Button" */}
      <Pressable 
        style={styles.button} 
        onPress={() => Alert.alert("You clicked the Box!")}
      >
        <Text style={styles.buttonText}>Click the Box</Text>
      </Pressable>

      {/* Example 3: Pressable Text */}
      <Pressable onPress={() => Alert.alert("You clicked the Text!")}>
        <Text style={styles.simpleText}>Click this plain text</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30, 
    backgroundColor: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, 
  },
  button: {
    backgroundColor: '#2f25b9',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  simpleText: {
    color: 'gray',
    textDecorationLine: 'underline',
  }
});