import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../Common';
import FlipToggle from 'react-native-flip-toggle-button';

const Notification = ({navigation}) => {
  const [isActive, setisActive] = useState(false);
  const [email, setEmail] = useState(false);
  const [notification, setNotification] = useState(false);
  const [reminder, setReminder] = useState(false);
  const [reminderEmail, setReminderEmail] = useState(false);
  const [reminderNotification, setReminderNotification] = useState(false);
  const [testResults, setTestResults] = useState(false);
  const [testResultsEmail, setTestResultsEmail] = useState(false);
  const [testResultsNotification, setTestResultsNotification] = useState(false);
  const [medication, setMedification] = useState(false);
  const [medicationEmail, setmedificationEmail] = useState(false);
  const [medicationNotification, setMedificationNotification] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <ScrollView
          contentContainerStyle={{paddingBottom: 90}}
          showsVerticalScrollIndicator={false}>
          <Header
            heading="Notifications"
            navigation={navigation}
            image={false}
          />
          <View style={styles.container}>
            <View style={styles.toggle}>
              <Text>Appointment Confirmation Alert</Text>
              <FlipToggle
                value={isActive}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#282F4B"
                sliderOffColor="#282F4B"
                onToggle={newState => setisActive(newState)}
                onToggleLongPress={newState => setisActive(newState)}
              />
            </View>
            <View style={styles.toggle}>
              <Text>Email</Text>
              <FlipToggle
                value={email}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#E4BC2D"
                sliderOffColor="#E4BC2D"
                onToggle={newState => setEmail(newState)}
                onToggleLongPress={newState => setEmail(newState)}
              />
            </View>
            <View style={styles.toggle}>
              <Text>Push Notification</Text>
              <FlipToggle
                value={notification}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#FFF"
                sliderOffColor="#FFF"
                onToggle={newState => setNotification(newState)}
                onToggleLongPress={newState => setNotification(newState)}
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.toggle}>
              <Text>Appointment Reminder</Text>
              <FlipToggle
                value={reminder}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#282F4B"
                sliderOffColor="#282F4B"
                onToggle={newState => setReminder(newState)}
                onToggleLongPress={newState => setReminder(newState)}
              />
            </View>
            <View style={styles.toggle}>
              <Text>Email</Text>
              <FlipToggle
                value={reminderEmail}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#E4BC2D"
                sliderOffColor="#E4BC2D"
                onToggle={newState => setReminderEmail(newState)}
                onToggleLongPress={newState => setReminderEmail(newState)}
              />
            </View>
            <View style={styles.toggle}>
              <Text>Push Notification</Text>
              <FlipToggle
                value={reminderNotification}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#FFF"
                sliderOffColor="#FFF"
                onToggle={newState => setReminderNotification(newState)}
                onToggleLongPress={newState =>
                  setReminderNotification(newState)
                }
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.toggle}>
              <Text>New Test Results</Text>
              <FlipToggle
                value={testResults}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#282F4B"
                sliderOffColor="#282F4B"
                onToggle={newState => setTestResults(newState)}
                onToggleLongPress={newState => setTestResults(newState)}
              />
            </View>
            <View style={styles.toggle}>
              <Text>Email</Text>
              <FlipToggle
                value={testResultsEmail}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#E4BC2D"
                sliderOffColor="#E4BC2D"
                onToggle={newState => setTestResultsEmail(newState)}
                onToggleLongPress={newState => setTestResultsEmail(newState)}
              />
            </View>
            <View style={styles.toggle}>
              <Text>Push Notification</Text>
              <FlipToggle
                value={testResultsNotification}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#FFF"
                sliderOffColor="#FFF"
                onToggle={newState => setTestResultsNotification(newState)}
                onToggleLongPress={newState =>
                  setTestResultsNotification(newState)
                }
              />
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.toggle}>
              <Text>Medication Reminder</Text>
              <FlipToggle
                value={medication}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#282F4B"
                sliderOffColor="#282F4B"
                onToggle={newState => setMedification(newState)}
                onToggleLongPress={newState => setMedification(newState)}
              />
            </View>
            <View style={styles.toggle}>
              <Text>Email</Text>
              <FlipToggle
                value={medicationEmail}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#E4BC2D"
                sliderOffColor="#E4BC2D"
                onToggle={newState => setmedificationEmail(newState)}
                onToggleLongPress={newState => setmedificationEmail(newState)}
              />
            </View>
            <View style={styles.toggle}>
              <Text>Push Notification</Text>
              <FlipToggle
                value={medicationNotification}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#FFF"
                sliderOffColor="#FFF"
                onToggle={newState => setMedificationNotification(newState)}
                onToggleLongPress={newState =>
                  setMedificationNotification(newState)
                }
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EFF3FE',
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 13,
  },
  container: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 10,
  },
});
