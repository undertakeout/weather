import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { txt: "" };
  }
  handleChange = (newLoc) => {
    this.setState({ txt: newLoc });
  };
  handleSubmit = () => {
    const { onSubmit } = this.props;
    const { txt } = this.state;

    if (!txt) return;
    onSubmit(txt);
    this.setState({ txt: "" });
  };

  render() {
    const { placeholder } = this.props;
    const { txt } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          autoCorrect={false}
          value={txt}
          placeholder={placeholder}
          placeholderTextColor="pink"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#666",
    color: "white",
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: "center"
  },
  textInput: {
    flex: 1,
    color: "pink"
  }
});
