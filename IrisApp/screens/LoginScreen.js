import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { WebView } from "react-native-webview";

function WebViewUI(props) {
  const webviewRef = React.useRef(null);

  function webViewgoback() {
    if (webviewRef.current) webviewRef.current.goBack();
  }

  function webViewNext() {
    if (webviewRef.current) webviewRef.current.goForward();
  }

  function LoadingIndicatorView() {
    return (
      <ActivityIndicator
        color="#009b88"
        size="large"
        style={styles.ActivityIndicatorStyle}
      />
    );
  }
  return (
    <>
      <SafeAreaView style={styles.flexContainer}>
        <WebView
          source={{
              html: `<html>
              <body style="display:flex; justify-content:center;flex-direction:column;align-items:center;">
              
              <h1>Login</h1>
              
              <form action="/action_page.php">
                <label for="fname">User Name:</label>
                <input type="text" id="fname" name="fname"><br><br>
                <label for="lname">Password:</label>
                <input type="text" id="lname" name="lname"><br><br>
                <input type="submit" value="Submit">
              </form>
              </body>
              </html>
              `,
          }}
          renderLoading={LoadingIndicatorView}
          startInLoadingState={true}
          ref={webviewRef}
        />
        <View style={styles.tabBarContainer}>
          <TouchableOpacity onPress={webViewgoback}>
            <Text style={{ color: "green" }}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => props.navigation.navigate("Home")}>
            <Text style={{ color: "green" }}>Exit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={webViewNext}>
            <Text style={{ color: "green" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: "center",
    width:80,
  },
  flexContainer: {
    flex:1,
  },
  tabBarContainer: {
    backgroundColor: "#d3d3d3",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "space-between",
  },
  button: {
    fontSize: 24,
  },
  arrow: {
    color: "#ef4771",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
export default WebViewUI;