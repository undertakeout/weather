import React from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground
} from "react-native";

import Search from "./txtInput";

import getWeather from "./pics";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "Tampa" };
  }

  handleUpdateLoc = (loc) => {
    this.setState({ location: loc });
  };
  render() {
    const { location } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container}>
        <ImageBackground
          source={getWeather("cloudy")}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.txtContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Cloudy</Text>
            <Text style={[styles.largeText, styles.textStyle]}>91° F</Text>
            <Search
              placeholder="enter a city"
              onSubmit={this.handleUpdateLoc}
            />
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
