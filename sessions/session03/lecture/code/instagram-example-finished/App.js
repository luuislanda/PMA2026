import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* User/Author Information */}
      <View style={styles.postHeader}>
        <View style={styles.postHeaderTextWrapper}>
          <Image 
            source={require('./assets/profilepic.png')}
            style={styles.pfp}
          />
          <View style={styles.userInfo}>
            <Text style={styles.usernameText}>snow.biker</Text>
            <Text style={styles.locationText}>Nørreport</Text>
          </View>
        </View>
        <Image source={require('./assets/more-icon.png')} style={styles.iconSmall} />
      </View>

      {/* Main Post Image */}
      <View>
        <Image 
          source={require('./assets/biking.png')}
          style={styles.mainImage}
        />
      </View>

      {/* Interaction Icons and Counts */}
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>  
          <View style={styles.interactiveIconsLeft}>
            <Image source={require('./assets/heart-icon.png')} style={styles.iconSmall} />
            <Text style={styles.iconText}>380</Text>
          </View>
          <View style={styles.interactiveIconsLeft}>
            <Image source={require('./assets/comment-icon.png')} style={styles.iconSmall} />
            <Text style={styles.iconText}>2</Text>
          </View>
          <View style={styles.interactiveIconsLeft}>
            <Image source={require('./assets/repost-icon.png')} style={styles.iconSmall} />
            <Text style={styles.iconText}>2</Text>
          </View>
        </View>
        <View style={styles.interactiveIconsRight}>
            <Image source={require('./assets/save.png')} style={styles.iconSmall} />
          </View>
      </View>

      {/* Post body*/}
      <View style={styles.captionContainer}>
        <Text style={styles.captionText}> 
          <Text style={styles.boldText}>snow.biker </Text> 
          Here is me, biking through Copenhagen to get to work, what a beautiful day.
        </Text>
        <Text style={styles.locationText}>11 hours ago</Text>
      </View>


      {/* Interactive Secret Message Button */}
      <View style={styles.buttonWrapper}>
        <Button
            title="Press to read the secret message"
            color="white"
            onPress={() => Alert.alert('🥶')}
          />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 30,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Pushes user info left and "more" icon to the right
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 40,
  },
  postHeaderTextWrapper: {
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  usernameText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  locationText: {
    color: '#a0a0a0',
    fontSize: 12,
    marginTop: 4,
  },
  mainImage: {
    width: '100%',
    height: 450,
  },
  captionText: {
    color: 'white',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  captionContainer: {
    paddingHorizontal: 10,
  },
  userInfo: {
    marginLeft: 15
  },
  pfp: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center',
  },
  leftIcons : {
    flexDirection: 'row',
  },
  interactiveIconsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  iconSmall: {
    width: 24,
    height: 24,
    tintColor: 'white', // Assumes white icons or colors them white
  },
  iconText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 14,
    fontWeight: '500',
  },
  buttonWrapper : {
    marginTop: 15,
    justifyContent: 'center',
    width: "80%",
    height: 60,
    backgroundColor: "#0086FF",
    alignSelf: "center",
    borderRadius: 50,
  }
});