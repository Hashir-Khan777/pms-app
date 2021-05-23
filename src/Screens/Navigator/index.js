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
  VideoAppointement,
  BookAppointment,
  AppointmentTiming,
  AppointmentCalender,
  MyMessages,
  AddContact,
  Message,
  HealthDiary,
  AddHealthManually,
  ManualHealth,
  Profile,
  Edit,
  Notification,
  Language,
  Payment,
  PaymentHistory,
  InstantSignIn,
  ChildAccount,
  RepeatPrescription,
  Medication,
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
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

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
      <Stack.Screen
        name="VideoAppointment"
        component={VideoAppointement}
        options={MyTransition}
      />
      <Stack.Screen
        name="BookAppointment"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="AppointmentTiming"
        component={AppointmentTiming}
        options={MyTransition}
      />
      <Stack.Screen
        name="AppointmentCalender"
        component={AppointmentCalender}
        options={MyTransition}
      />
      <Stack.Screen
        name="MyMessages"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="AddContact"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="HealthDiary"
        component={HealthDiary}
        options={MyTransition}
      />
      <Stack.Screen
        name="AddHealthManually"
        component={AddHealthManually}
        options={MyTransition}
      />
      <Stack.Screen
        name="ManualHealth"
        component={ManualHealth}
        options={MyTransition}
      />
      <Stack.Screen name="Message" component={Message} options={MyTransition} />
      <Stack.Screen
        name="Profile"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="Edit"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="Notification"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="Language"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="Payment"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="PaymentHistory"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="InstantSignIn"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="ChildAccount"
        component={BottomTabNavigation}
        options={MyTransition}
      />
      <Stack.Screen
        name="RepeatPrescrption"
        component={RepeatPrescription}
        options={MyTransition}
      />
      <Stack.Screen
        name="Medication"
        component={Medication}
        options={MyTransition}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#E4BC2D',
        inactiveTintColor: 'rgba(255, 255, 255, 0.5)',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Medicines" component={Medicines} />
      <Tab.Screen name="Results" component={Results} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Appointment" component={Appointment} />
      <Tab.Screen name="BookAppointment" component={BookAppointment} />
      <Tab.Screen name="MyMessages" component={MyMessages} />
      <Tab.Screen name="AddContact" component={AddContact} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Edit" component={Edit} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="Language" component={Language} />
      <Tab.Screen name="Payment" component={Payment} />
      <Tab.Screen name="PaymentHistory" component={PaymentHistory} />
      <Tab.Screen name="InstantSignIn" component={InstantSignIn} />
      <Tab.Screen name="ChildAccount" component={ChildAccount} />
    </Tab.Navigator>
  );
};

const CustomTabBar = props => (
  <View style={styles.main}>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Home')}
      activeOpacity={0.6}
      style={styles.tab}>
      <Icons
        name={props.state.index === 0 ? activeHome : inActiveHome}
        iconHeight={20}
      />
      <Text
        style={
          props.state.index === 0
            ? {color: props.activeTintColor}
            : {color: props.inactiveTintColor}
        }>
        Home
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Medicines')}
      activeOpacity={0.6}
      style={styles.tab}>
      <Icons
        name={props.state.index === 1 ? activeMedicine : inActiveMedicine}
        iconHeight={20}
      />
      <Text
        style={
          props.state.index === 1
            ? {color: props.activeTintColor}
            : {color: props.inactiveTintColor}
        }>
        Medicines
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Results')}
      activeOpacity={0.6}
      style={styles.tab}>
      <Icons
        name={props.state.index === 2 ? activeResults : inActiveResults}
        iconHeight={20}
      />
      <Text
        style={
          props.state.index === 2
            ? {color: props.activeTintColor}
            : {color: props.inactiveTintColor}
        }>
        Results
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Notes')}
      activeOpacity={0.6}
      style={styles.tab}>
      <Icons
        name={props.state.index === 3 ? activeNotes : inActiveNotes}
        iconHeight={20}
      />
      <Text
        style={
          props.state.index === 3
            ? {color: props.activeTintColor}
            : {color: props.inactiveTintColor}
        }>
        Notes
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Appointment')}
      activeOpacity={0.6}
      style={styles.tab}>
      <Icons
        name={
          props.state.index === 4 || props.state.index === 5
            ? activeAppointment
            : inActiveAppointment
        }
        iconHeight={20}
      />
      <Text
        style={
          props.state.index === 4
            ? {color: props.activeTintColor}
            : {color: props.inactiveTintColor}
        }>
        Appt.
      </Text>
    </TouchableOpacity>
  </View>
);

export {StackNavigation, BottomTabNavigation};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#282F4B',
    width: '90%',
    borderRadius: 30,
    marginBottom: 10,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 70,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 20,
  },
  tab: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
