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
                <title>Place Search Pagination</title>
                <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
                <style type="text/css">
                  html,
                  body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                  }
            
                  #container {
                    height: 100%;
                    display: flex;
                  }
            
                  #sidebar {
                    flex-basis: 5rem;
                    flex-grow: 1;
                    padding: 1rem;
                    max-width: 30rem;
                    height: 100%;
                    box-sizing: border-box;
                    display: flex;
                  }
            
                  #map {
                    flex-basis: 0;
                    flex-grow: 4;
                    height: 100%;
                  }
            
                  #sidebar {
                    display: flex;
                    flex-direction: column;
                  }
            
                  h2 {
                    font-size: 1.5rem;
                    margin: 0 0 5px 0;
                    flex-grow: 0;
                  }
            
                  ul {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    overflow-y: scroll;
                    flex-grow: 1;
                  }
            
                  li {
                    background-color: #f1f1f1;
                    padding: 10px;
                    text-overflow:ellipsis;
                    white-space:normal;
                    overflow: hidden;
                    font-size: 1.25rem;
                    cursor: pointer;
                  }
            
                  button {
                    width: 100%;
                    padding: 1rem;
                    flex-grow: 0;
                    cursor: pointer;
                    background: #1a73e8;
                    font-size: 1.5rem;
                    color: white;
                    border: none;
                  }
            
                  button:hover {
                    color: #c5d4f0;
                  }
            
                  button:disabled {
                    background-color: #9fc1ee;
                    color: #c5d4f0;
                    cursor: auto;
                  }
                </style>
                <script>
                  function initMap() {
                    const pyrmont = { lat: 6.521405, lng:  3.366947};
                    const map = new google.maps.Map(document.getElementById("map"), {
                      center: pyrmont,
                      zoom: 15,
                      //mapId: "8d193001f940fde3",
                    });
                    const service = new google.maps.places.PlacesService(map);
                    let getNextPage;
                    const moreButton = document.getElementById("more");
            
                    moreButton.onclick = function () {
                      moreButton.disabled = true;
            
                      if (getNextPage) {
                        getNextPage();
                      }
                    };
                    service.nearbySearch(
                      { location: pyrmont, radius: 1000, type: "hospital" },
                      (results, status, pagination) => {
                        if (status !== "OK" || !results) return;
                        addPlaces(results, map);
                        moreButton.disabled = !pagination || !pagination.hasNextPage;
            
                        if (pagination && pagination.hasNextPage) {
                          getNextPage = () => {
                            pagination.nextPage();
                          };
                        }
                      }
                    );
                  }
            
                  function addPlaces(places, map) {
                    const placesList = document.getElementById("places");
            
                    for (const place of places) {
                      if (place.geometry && place.geometry.location) {
                        new google.maps.Marker({
                          map,
                          title: place.name,
                          position: place.geometry.location,
                        });
                       
                        const li = document.createElement("li");
                        
                        var listContent = "<ul><li style=\"background-color:white\">"+place.name+"</li>";
            
                        if(place.rating){
                          var stars=Math.floor(Number(place.rating));
                          var i;
                          var totalStars="";
                          for(i=0;i<stars;i++){
                            totalStars=totalStars+"??????";
                          }
                          listContent = listContent+"<li style=\"background-color:white\">Rating: "+totalStars+" "+place.rating+"/5</li>";
                        }
            
                        listContent = listContent+"<li style=\"background-color:white\">Address: "+place.vicinity+"</li>";
                        
                        li.innerHTML = listContent+"</u>"; 
                        placesList.appendChild(li);
                        
            
                        li.addEventListener("click", () => {
                          map.setCenter(place.geometry.location);
                          map.setZoom(30);
                        });
                      }
                    }
                  }
                </script>
              </head>
              <body>
                <div id="container">
                  <div id="map"></div>
                  <div id="sidebar">
                    <h2>Results</h2>
                    <ul id="places"></ul>
                    <button id="more">Load more results</button>
                  </div>
                </div>
            
                <script
                  src="https://maps.googleapis.com/maps/api/js?key=&callback=initMap&libraries=places&v=weekly&map_ids=8d193001f940fde3"
                  async
                ></script>
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
