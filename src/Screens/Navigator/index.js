import {
  createStackNavigator,
  HeaderStyleInterpolators,
  TransitionSpecs,
} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import {
  SignIn,
  CreateAccount,
  Splash,
  Home,
  Medicines,
  Results,
  Notes,
  Appointment,
  Prescription,
  ResultDetails,
  ClinicalNotes,
} from '..';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icons} from '../../Common';
import {
  activeHome,
  inActiveHome,
  activeMedicine,
  inActiveMedicine,
  activeResults,
  inActiveResults,
  activeNotes,
  inActiveNotes,
  activeAppointment,
  inActiveAppointment,
} from '../../Assets/Icons';

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
      <Stack.Screen
        name="Prescription"
        component={Prescription}
        options={MyTransition}
      />
      <Stack.Screen
        name="ResultDetails"
        component={ResultDetails}
        options={MyTransition}
      />
      <Stack.Screen
        name="ClinicalNotes"
        component={ClinicalNotes}
        options={MyTransition}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#E4BC2D',
        inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
        style: {
          position: 'absolute',
          backgroundColor: '#282F4B',
          width: '90%',
          borderRadius: 30,
          marginBottom: 10,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          height: 70,
          paddingTop: 10,
          paddingBottom: 10,
          marginLeft: 20,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons name={focused ? activeHome : inActiveHome} iconHeight={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Medicines"
        component={Medicines}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name={focused ? activeMedicine : inActiveMedicine}
              iconHeight={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Results"
        component={Results}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name={focused ? activeResults : inActiveResults}
              iconHeight={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name={focused ? activeNotes : inActiveNotes}
              iconHeight={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Appointment"
        component={Appointment}
        options={{
          tabBarIcon: ({focused}) => (
            <Icons
              name={focused ? activeAppointment : inActiveAppointment}
              iconHeight={20}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export {StackNavigation, BottomTabNavigation};
