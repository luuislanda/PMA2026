import { StyleSheet, View, Button, Alert } from 'react-native'; // <-- Button and Alert have been imported

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <Button
          title="Press Me!"       // The text inside the button
          color="#fff"        // This controls the color of the text in iOS. In Android, it changes the background color
          onPress={() => Alert.alert('Hello!')}       // This line controls what the Alert will say
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {    // Since we cannot style <Button />, we can wrap it in a <View> and style the <View>
    width: 250,
    backgroundColor: '#ff0000',   // Gives the area behind the button a color
    padding: 30,    // Gives the text "room"
    borderRadius: 50,   // Rounds the corners of the red area
  }
});