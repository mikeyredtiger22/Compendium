/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React, { FunctionComponent } from "react";
import {
  ArticleDetailScreen,
  ContentScreen,
  DemoScreen,
  FormScreen,
  GridScreen,
  WelcomeScreen,
} from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Icons from "@expo/vector-icons";
import { color } from "../theme";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "../components";
import { ViewStyle } from "react-native";
import { Article } from "../models/article/article";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  Content: undefined;
  Grid: undefined;
  Form: undefined;
  Map: undefined;
  Website: undefined;
  ArticleDetail: {
    item: Article;
  };
};

const Tab = createBottomTabNavigator<PrimaryParamList>();

// const defaultNavOptions={
//   title: 'My home',
//   headerTintColor: palette.darkBlue,
//   headerStyle: {
//     backgroundColor: palette.yellow,
//   }
// };

export function TabsNavigator(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: color.palette.darkBlue,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return getTabIcon(route.name, focused, color, size);
        },
      })}
    >
      <Tab.Screen
        name="Content"
        component={getStackScreen("Content", ContentScreen, props.navigation)}
      />
      <Tab.Screen
        name="Grid"
        component={getStackScreen("Grid", GridScreen, props.navigation)}
      />
      <Tab.Screen
        name="Form"
        component={getStackScreen("Form", FormScreen, props.navigation)}
      />
      <Tab.Screen
        name="Map"
        component={getStackScreen("Map", WelcomeScreen, props.navigation)}
      />
      <Tab.Screen
        name="Website"
        component={getStackScreen("Website", DemoScreen, props.navigation)}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function getStackScreen(
  title: string,
  component: FunctionComponent,
  navigation,
) {
  return function() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerRight: () => drawerOpenIcon(navigation),
          headerStyle: {
            backgroundColor: color.palette.darkBlue,
          },
          headerTintColor: color.palette.white,
          headerTitleStyle: {
            fontSize: 25,
          },
        }}
      >
        <Stack.Screen name={title} component={component} options={{ title }} />
        <Stack.Screen
          name={"ArticleDetail"}
          component={ArticleDetailScreen}
          options={{ title: "sup" }}
        />
      </Stack.Navigator>
    );
  };
}

const getTabIcon = (screenName: string, focused, color, size) => {
  switch (screenName) {
    case "Content":
      return (
        <Icons.FontAwesome5
          name={focused ? "list-alt" : "list-ul"}
          size={focused ? size : size * (15 / 24)}
          color={color}
        />
      );
    case "Grid":
      return focused ? (
        <Icons.Entypo name={"grid"} size={size * 1.25} color={color} />
      ) : (
        <Icons.Feather name={"grid"} size={size} color={color} />
      );
    case "Form":
      return (
        <Icons.MaterialIcons
          name={focused ? "person" : "person-outline"}
          size={size}
          color={color}
        />
      );
    case "Map":
      return focused ? (
        <Icons.FontAwesome5 name={"map-marked-alt"} size={size} color={color} />
      ) : (
        <Icons.FontAwesome5 // eslint-disable-next-line react-native/no-inline-styles
          style={{ paddingTop: 6 }}
          name={"map"}
          size={size}
          color={color}
        />
      );
    case "Website":
      return focused ? (
        <Icons.FontAwesome5 name={"globe"} size={size} color={color} />
      ) : (
        <Icons.SimpleLineIcons name={"globe"} size={size} color={color} />
      );
    default:
      return (
        <Icons.FontAwesome5 name={"times-circle"} size={size} color={color} />
      );
  }
};
const drawerOpenIcon = navigation => {
  return (
    <Button style={OPEN_DRAWER_BUTTON} onPress={() => navigation.openDrawer()}>
      <Icons.FontAwesome5 name="bars" color={color.palette.white} size={20} />
    </Button>
  );
};

const OPEN_DRAWER_BUTTON: ViewStyle = {
  paddingHorizontal: 15,
  backgroundColor: "transparent",
};

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
