import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const TrackingScreen = () => {
    return (
        <View style={styles.container}>
        <Text>TrackingScreen</Text>
        <Button
        title="track"
        onPress={()=>alert('Tracking!')}
        />
        </View>
    );
};

export default TrackingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})