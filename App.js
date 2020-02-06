import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, ImageBackground } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <ImageBackground source={require('./assets/trees.jpg')} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <Text
          style={{
            flex: 1,
            // alignItems: 'center',
            fontWeight: 'bold',
            fontSize: 28,
            textAlign: 'center'
          }}
        >EVENTO</Text>
        {/* <Image
          source={require('./assets/bowl.png')}
          style={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height / 3.9
          }}
        /> */}
        <Text style={styles.mainText}>Hey! Go ahead and add some events.</Text>
        <View style={styles.labelAbout}>
          <Text style={styles.textField}>Contact Us</Text>
          {/* <Image source={require('./assets/contact.svg') } /> */}
        </View>
        <View style={styles.labelContact}>
          <Text style={styles.textField}>About Us</Text>
          {/* <Icon name="rocket" size={30} /> */}
        </View>
        <View style={styles.labelEvent}>
          <Text style={styles.textField}>Events</Text>
        </View>
        <View style={styles.labelLogin}>
          <Text style={styles.textField}>Login</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    paddingTop: Dimensions.get('window').height / 8.5,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  labelAbout: {
    backgroundColor: '#f1661c',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 100,
    // flex: 1,
  },
  labelContact: {
    backgroundColor: '#fce241',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 100,
  },
  labelEvent: {
    backgroundColor: '#cfffcc',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 100,
  },
  labelLogin: {
    backgroundColor: '#ece9de',
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: 100,
  },
  textField: {
    fontSize: 18,
    width: Dimensions.get('window').width,
    paddingTop: 30,
    textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center'
    // fon
  },
});
