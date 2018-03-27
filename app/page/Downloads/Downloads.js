/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

//下載專區
import React, { Component } from "react";
import { Platform, Linking, Image, StyleSheet, Text, View } from "react-native";

import Btns from "../../utils/Btn";
import screen from "../../Style/screen";

export default class Dowunloads extends Component {
  _NavigationBtn(page, PageName, PageUrl) {
    const { navigate } = this.props.navigation;
    if (Platform.OS === "android") {
      navigate(page, {
        PageName: PageName,
        PageUrl: PageUrl
      });
    } else {
      Linking.openURL(PageUrl);
    }
  }

  _Navigation(page) {
    const { navigate } = this.props.navigation;
    navigate(page);
  }

  render() {
    return (
      <Image style={styles.container} source={require("../../image/backgrounds/downloads.png")}>
        <Btns
          text={"申請須知及書表"}
          onPress={this._Navigation.bind(this, "ApplicationNote")}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(26,114,156)", marginTop: 20 }}
        />
        <Btns
          text={"為民服務手冊"}
          onPress={() => {
            Linking.openURL(
              "http://www.xh-land.gov.tw/?Page=Files&Guid=93b16f68-6d77-e488-8478-a389374d7351&Colum=&OrderBy=&fit_guid=&keyword=%E5%BD%B0%E5%8C%96%E7%B8%A3%E6%BA%AA%E6%B9%96%E5%9C%B0%E6%94%BF%E4%BA%8B%E5%8B%99%E6%89%80%E7%82%BA%E6%B0%91%E6%9C%8D%E5%8B%99%E6%89%8B%E5%86%8A"
            );
          }}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(26,114,156)", marginTop: 20 }}
        />
        <Btns
          text={"轄區地段示意圖"}
          onPress={this._NavigationBtn.bind(
            this,
            "WebPage",
            "本所轄區地段示意圖",
            "http://www.xh-land.gov.tw/?Guid=6a74b6fc-d8a8-d713-28a4-d87c1ddf68b8"
          )}
          textSize={{ fontSize: 24 }}
          styless={{ backgroundColor: "rgb(26,114,156)", marginTop: 20 }}
        />
      </Image>
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
