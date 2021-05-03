import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {Splash} from '..';
import CreateAccount from '../CreateAccount';
import SignIn from '../SignIn';

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
    <Stack.Navigator initialRouteName="Splash" headerMode={'none'}>
      <Stack.Screen name="Splash" component={Splash} options={MyTransition} />
      <Stack.Screen name="SignIn" component={SignIn} options={MyTransition} />
      <Stack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={MyTransition}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
