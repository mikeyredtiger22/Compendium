import * as React from "react";
import {
  Image,
  ImageStyle,
  Linking,
  SafeAreaView,
  View,
  ViewStyle,
} from "react-native";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { flatten, mergeAll } from "ramda";
import { color } from "../../theme";
export const drawerHeader = require("./drawer_header.png");

export function CustomDrawerContentComponent(
  props: DrawerContentComponentProps,
) {
  return (
    <DrawerContentScrollView
      {...mergeAll(
        flatten([{ contentContainerStyle: DRAWER_CONTAINER_STYLE }, props]),
      )}
    >
      <View style={DRAWER_HEADER}>
        <Image
          source={drawerHeader}
          style={DRAWER_HEADER_IMAGE}
          resizeMode={"cover"}
        />
      </View>
      <SafeAreaView style={SAFE_AREA_VIEW_STYLE}>
        <DrawerItemList
          activeTintColor={color.palette.blue}
          itemStyle={DRAWER_ITEM}
          {...props}
        />
        <View style={DRAWER_END_CONTAINER}>
          <DrawerItem
            style={DRAWER_ITEM}
            label="Open Google"
            onPress={() => Linking.openURL("https://www.google.com")}
          />
        </View>
      </SafeAreaView>
    </DrawerContentScrollView>
  );
}

const DRAWER_ITEM: ViewStyle = {
  borderWidth: 1,
  borderRadius: 0,
  marginVertical: -0.5,
};
const DRAWER_HEADER: ViewStyle = {
  height: 200,
};
const DRAWER_HEADER_IMAGE: ImageStyle = {
  height: 200,
  width: "100%",
  // aspectRatio: 1
};
const DRAWER_CONTAINER_STYLE: ViewStyle = {
  flex: 1,
  paddingTop: 0, // removes automatic safe area view - top padding
};
const DRAWER_END_CONTAINER: ViewStyle = {
  flex: 1,
  justifyContent: "flex-end",
};
const SAFE_AREA_VIEW_STYLE: ViewStyle = {
  flex: 1,
  marginVertical: 12,
};
