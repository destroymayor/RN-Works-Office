/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//為民服務手冊
import React, { Component } from "react";
import { FlatList, Image, Linking, StyleSheet, Text, View } from "react-native";

import screen from "../../Style/screen";
import Btn from "../../utils/Button";
import List from "./DownloadList.js/index";

export default class ServiceManual extends Component {
  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/fileapplication.png")}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            backgroundColor: "rgba(255,255,255,0)"
          }}
        />
        <FlatList
          data={List.List8}
          keyExtractor={(item, index) => index}
          initialScrollIndex={10}
          initialNumToRender={10}
          renderItem={this.renderRow}
        />
      </Image>
    );
  }

  renderRow({ item }) {
    return (
      <View
        style={{
          width: "100%",
          marginBottom: 10,
          backgroundColor: "rgba(255,255,255,0.5)"
        }}
      >
        <Text style={{ fontSize: 18, margin: 3 }}>{item.Title}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            justifyContent: "space-around",
            paddingBottom: 10
          }}
        >
          <Btn
            ImageSource={require("../../image/pdf.png")}
            ImageStyle={{ width: 80, height: 80 }}
            onPress={() => {
              Linking.openURL(item.File2PDF);
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screen.width,
    height: screen.height
  }
});
