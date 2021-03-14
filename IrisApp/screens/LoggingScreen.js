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

              <head>
                  <script type="text/javascript">
                      window.onload = function() {
                          var dps = [];  
              
                          var chart = new CanvasJS.Chart("chartContainer", {
                              title: {
                                  text: "Accepting DataPoints from User Input"
                              },
                              data: [{
                                  type: "line",
                                  dataPoints: dps
                              }]
                          });
              
                          function addDataPointsAndRender() {
                              xValue = Number(document.getElementById("xValue").value);
                              yValue = Number(document.getElementById("yValue").value);
                              dps.push({
                                  x: xValue,
                                  y: yValue
                              });
                              chart.render();
                          }
              
                          var renderButton = document.getElementById("renderButton");
                          renderButton.addEventListener("click", addDataPointsAndRender);
                      }
                  </script>
                  <script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
              </head>
              
              <body style="display:flex; justify-content:center;flex-direction:column;align-items:center">
                  Day of the month:
                  <input id="xValue" type="number" step="any" placeholder="Enter X-Value"> Weight:
                  <input id="yValue" type="number" step="any" placeholder="Enter Y-Value">
                  <button id="renderButton">Add DataPoint & Render</button>
                  <div id="chartContainer" style="height: 270px; width: 100%;">
                  </div>
              </body>
              
              </html>`,
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
  },
  flexContainer: {
    flex: 1,
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