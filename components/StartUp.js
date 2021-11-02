import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function StartUp(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.vocabularyBuilder}>Vocabulary Builder</Text>
      <Text style={styles.loremIpsum}>
        Welcome to Vocabulary builder. This vocabulary builder contains features
        like memory bucket where you can store the list of words you learned or
        want to learn and it will alert those words from your memory bucket and
        help your increase your lvocabulary.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(67,188,95,1)",
    
  },
  vocabularyBuilder: {
    
    color: "rgba(2,2,2,1)",
    height: 50,
    width: 428,
    lineHeight: 26,
    textAlign: "center",
    fontSize: 23,
    marginTop: 108,
    alignSelf: "center"
  },
  loremIpsum: {
    fontFamily: "roboto-700",
    color: "rgba(208,2,27,1)",
    height: 417,
    width: 266,
    fontSize: 26,
    textAlign: "center",
    marginTop: 46,
    marginLeft: 55
  }
});

export default StartUp;
