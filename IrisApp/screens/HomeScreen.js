import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const HomeScreen = ({ navigation }) => {

    return (
  
      <React.Fragment>
        
      <View style={styles.container}>
          <Text></Text>
        </View>
  
        <View style={styles.button}>
          <Button
            color='#8f48ab'
            title="Login"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
  
        <View style={styles.button}>
          <Button
            color='#8f48ab'
            title="Register"
            onPress={() => navigation.navigate("Registration")}
          />
        </View>
  
      </React.Fragment>
    );
  }
  
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})