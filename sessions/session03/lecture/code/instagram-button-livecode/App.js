import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* User/Author Information */}
      <View style={styles.postHeader}>
        <Image 
          source={require('./assets/profilepic.png')}
          style={styles.pfp}
          />
        <View style={styles.userInfo}>
          <Text style={styles.usernameText}>snow.biker</Text>
          <Text style={styles.locationText}>Nørreport</Text>
        </View>
        {/* Here goes the icon you added in the exercise last week*/}
      </View>


      {/* Main Post Image */}
      <View>
        <Image 
          source={require('./assets/biking.png')}
          style={styles.mainImage}
        />
      </View>

      {/* Icons */}

      {/* Post body*/}
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}> 
          <Text style={styles.boldText}>snow.biker </Text> 
          Here is me, biking through Copenhagen to get to work, what a beautiful day.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 40,
  },
  usernameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationText: {
    color: '#a0a0a0',
    fontSize: 12,
  },
  mainImage: {
    width: '100%',
    height: 450,
    paddingVertical: 15,
  },
  captionText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 22,
  },
  boldText: {
    fontWeight: 'bold',
  },
  captionContainer: {
    padding: 15,
  },
  userInfo: {
    marginLeft: 15
  },
  pfp: {
    marginRight: 15,
  }
});
