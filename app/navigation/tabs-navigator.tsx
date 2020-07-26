/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React, { FunctionComponent } from "react"
import { ContentScreen, DemoScreen, FormScreen, GridScreen, WelcomeScreen } from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { FontAwesome5 } from "@expo/vector-icons"
import { color } from "../theme"
import { createStackNavigator } from "@react-navigation/stack"
import { Button } from "../components"
import { ViewStyle } from "react-native"

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
  Content: undefined,
  Grid: undefined,
  Form: undefined,
  Map: undefined,
  Website: undefined,
}

const Tab = createBottomTabNavigator<PrimaryParamList>()

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
          return <FontAwesome5 name={getTabIcon(route.name)} solid={focused} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Content" component={getStackScreen('Content', ContentScreen, props.navigation)} />
      <Tab.Screen name="Grid" component={GridScreen} />
      <Tab.Screen name="Form" component={FormScreen} />
      <Tab.Screen name="Map" component={WelcomeScreen} />
      <Tab.Screen name="Website" component={DemoScreen} />
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

function getStackScreen(title: string, component: FunctionComponent, navigation) {
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
        }}>
        <Stack.Screen
          name={title}
          component={component}
          options={{ title }}
        />
      </Stack.Navigator>
    )
  }
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
const drawerOpenIcon = (navigation) => {
  return (
    <Button style={OPEN_DRAWER_BUTTON} onPress={() => navigation.openDrawer()}>
      <FontAwesome5 name='bars' color={color.palette.white} size={20}/>
    </Button>
  )
}

const OPEN_DRAWER_BUTTON: ViewStyle = {
  paddingHorizontal: 15,
  backgroundColor: 'transparent'
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
