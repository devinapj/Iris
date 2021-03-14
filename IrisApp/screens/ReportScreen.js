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
                      window.onload = function () {
                          var dps = []; //dataPoints.
              
                          var chart = new Chart(ctx, {
                 type: 'line',
                 data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                    datasets: [{
                       label: 'Weight',
                       data: [48, 57, 54, 54, 59],
                       backgroundColor: 'rgba(0, 119, 290, 0.2)',
                       borderColor: 'rgba(0, 119, 290, 0.6)',
                       fill: false
                    }]
                 },
                 options: {
                    scales: {
                       yAxes: [{
                          ticks: {
                             beginAtZero: false,
                             stepSize: 1
                          }
                       }]
                    }
                 }
              });
              
                          function saveAsPDF() {
                              html2canvas(document.getElementById("chart-container"), {
                                  onrendered: function (canvas) {
              
                                      var img = canvas.toDataURL(); //image data of canvas
                                      var doc = new jsPDF("l", "mm", "a4");
                                      doc.addImage(img, 'JPEG', 10, 10, 180, 150);
                                      doc.save('MonthlyReport.pdf');
                                  }
                              });
                          }
                          
                          var exportButton = document.getElementById("exportPDF");
                          exportButton.addEventListener("click", saveAsPDF)
                      }
              
                  </script>
              
                  <script type="text/javascript" src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.5/jspdf.min.js"></script>
                  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
              </head>
              
              <body>
                  <div id="chart-container">
                      Your Monthly Report
                      <canvas id="ctx"></canvas>
                   </div><br>
                   <button id="exportPDF">save as pdf</button>
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