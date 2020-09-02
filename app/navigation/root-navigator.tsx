/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your TabsNavigator) which the user
 * will use once logged in.
 */
import React from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
} from '@react-navigation/native';
import i18n from 'i18n-js';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from '../theme/color';
import { IntroContentScreen } from '../screens/intro-content-screen';
import { typography } from '../theme/typography';
import { ArticleDetailScreen } from '../screens/article-detail-screen';
import { GridScreen } from '../screens/grid-screen';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='IntroContent'
      screenOptions={{
        headerStyle: {
          backgroundColor: color.palette.darkBlue,
        },
        headerTintColor: color.palette.white,
        headerTitleStyle: {
          fontSize: 25,
          fontFamily: typography.museo,
        },
      }}
    >
      <Stack.Screen
        name='IntroContent'
        component={IntroContentScreen}
        options={{ title: i18n.t('intoContentScreen.header') }}
      />
      <Stack.Screen name={'ArticleDetail'} component={ArticleDetailScreen} />
      <Stack.Screen
        name={'Grid'}
        component={GridScreen}
        options={{ title: i18n.t('gridScreen.header') }}
      />
    </Stack.Navigator>
  );
};

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <RootStackNavigator />
    </NavigationContainer>
  );
});

RootNavigator.displayName = 'RootNavigator';
