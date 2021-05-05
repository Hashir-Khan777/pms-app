import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {SignIn, CreateAccount, Splash, Home} from '..';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
      <Stack.Screen name="Splash" component={Splash} options={MyTransition} />
      <Stack.Screen name="SignIn" component={SignIn} options={MyTransition} />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={MyTransition}
      />
      <Stack.Screen
        name="Home"
        component={BottomTabNavigation}
        options={MyTransition}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export {StackNavigation, BottomTabNavigation};
