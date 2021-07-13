import React from "react";
import {
  View,
  StyleSheet,
  Text,
  KeyboardAvoidingView,
  Platform,
  TextInput
} from "react-native";
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText, styles.textStyle]}>Tampa</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Cloudy</Text>
        <Text style={[styles.largeText, styles.textStyle]}>91° F</Text>{" "}
        <TextInput
          autoCorrect={false}
          placeholder="enter a city."
          placeholderTextColor="pink"
          style={styles.TextInput}
          clearButtonMode="always"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: {
    textAlign: "center",
    ...Platform.select({
      ios: { fontFamily: "AvenirNext-Regular" },
      android: { fontFamily: "Roboto" }
    })
  },
  largeText: {
    fontSize: 40
  },
  smallText: {
    fontSize: 18
  },
  textInput: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center"
  }
});
