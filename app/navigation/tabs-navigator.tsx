/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { WelcomeScreen, DemoScreen, ContentScreen, GridScreen, FormScreen } from "../screens"
import { palette } from "../theme/palette"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome5 } from '@expo/vector-icons';
import { color } from "../theme"

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


  welcome: undefined
  demo: undefined
}

const Tab = createBottomTabNavigator<PrimaryParamList>()

const defaultNavOptions={
  title: 'My home',
  headerTintColor: palette.darkBlue,
  headerStyle: {
    backgroundColor: palette.yellow,
  }
};

export function TabsNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: color.palette.darkBlue,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return <FontAwesome5 name={getTabIcon(route.name)} solid={focused} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Content" component={ContentScreen} />
      <Tab.Screen name="Grid" component={GridScreen} />
      <Tab.Screen name="Form" component={FormScreen} />
      <Tab.Screen name="Map" component={WelcomeScreen} />
      <Tab.Screen name="Website" component={DemoScreen} />
    </Tab.Navigator>
  )
}

const getTabIcon = (screenName: string) => {
  switch (screenName) {
    case 'Content':
      return 'list-alt'
    case 'Grid':
      return 'th-large'
    case 'Form':
      return 'user-tie'
    case 'Map':
      return 'map-marked-alt'
    case 'Website':
      return 'globe'
    default:
      return 'times-circle'
  }
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["welcome"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
