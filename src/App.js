import React from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  StatusBar,
  ImageBackground
} from "react-native";

import Search from "./txtInput";

import getWeather from "./pics";

import { fetchLocationId, fetchWeather } from "./weatherapi";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      location: "",
      temperature: 0,
      weather: ""
    };
  }

  componentDidMount() {
    this.handleUpdateLoc("Tampa");
  }

  handleUpdateLoc = async (loc) => {
    if (!loc) return;

    this.setState({ loading: true }, async () => {
      try {
        const locationId = await fetchLocationId(loc);
        const { location, weather, temperature } = await fetchWeather(
          locationId
        );

        this.setState({
          loading: false,
          error: false,
          location: location,
          weather: weather,
          temperature: temperature
        });
      } catch (e) {
        this.setState({ loading: false, error: true });
      }
    });
  };

  render() {
    const { location, loading, error, weather, temperature } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={getWeather("cloudy")}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.txtContainer}>
            <ActivityIndicator animating={loading} color="pink" size="large" />
            {!loading && (
              <View>
                {!error && (
                  <Text style={[styles.smallText, styles.textStyle]}>
                    Couldn't load weather, try another city.
                  </Text>
                )}

                {!error && (
                  <View>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {location}
                    </Text>
                    <Text style={[styles.smallText, styles.textStyle]}>
                      {weather}
                    </Text>
                    <Text style={[styles.largeText, styles.textStyle]}>
                      {`${Math.round(temperature)} F`}{" "}
                    </Text>
                  </View>
                )}
                <Search
                  placeholder="enter a city"
                  onSubmit={this.handleUpdateLoc}
                />
              </View>
            )}
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34496E"
  },

  imageContainer: {
    flex: 1
  },

  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },

  txtContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingHorizontal: 20
  },
  textStyle: {
    textAlign: "center",
    ...Platform.select({
      ios: { fontFamily: "AvenirNext-Regular" },
      android: { fontFamily: "Roboto" }
    }),
    color: "white"
  },
  largeText: {
    fontSize: 40
  },
  smallText: {
    fontSize: 18
  }
});
