import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {demo} from '../../Assets/images';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  FONT_FAMILY_LIGHT,
  FONT_FAMILY_MEDIUM,
  FONT_FAMILY_REGULAR,
} from '../../Styles/typography';
import {Button, Icons, SearchBar} from '../../Common';
import {Reminder, UpcomingEvents} from './components';
import {
  blood,
  breakHeart,
  chat,
  doctor,
  heartBeat,
  line,
  meter,
  testResult,
  VideoAppointment,
} from '../../Assets/Icons/index';
import {Typography} from '../../Styles';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1, paddingBottom: 80, backgroundColor: '#EDF1FC'}}>
          <View style={styles.profileView}>
            <View>
              <View style={styles.mainImageView}>
                <Image source={demo} style={{borderRadius: 10}} />
                <TouchableOpacity
                  style={styles.changeProfileButton}
                  activeOpacity={0.6}>
                  <Text style={{color: '#fff'}}>Change Profile </Text>
                  <IonIcons name="chevron-down-outline" color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.userName}>
                <Text style={styles.heyText}>Hey, </Text>
                <Text style={styles.userFirstName}>Brian!</Text>
              </View>
            </View>
          </View>
          <View style={{flex: 1}}>
            <SearchBar />
            <View style={{paddingHorizontal: 25}}>
              <Text
                style={{
                  fontFamily: FONT_FAMILY_REGULAR,
                  fontSize: 18,
                }}>
                Upcoming Events
              </Text>
              <UpcomingEvents
                name={VideoAppointment}
                text="Video Appointment - now"
                buttonText="Join"
                height={30}
              />
              <UpcomingEvents
                name={testResult}
                text="New test result is available"
                buttonText="View"
                height={30}
              />
              <UpcomingEvents
                name={doctor}
                text="Dr. Smith - 14:30pm"
                buttonText="Check-In"
                height={30}
              />
              <View style={styles.healthDiaryView}>
                <Text>Health Dairy</Text>
                <Button
                  textStyles={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontFamily: Typography.FONT_FAMILY_REGULAR,
                  }}>
                  View
                </Button>
              </View>
              <View style={styles.heartBeatView}>
                <View style={{alignSelf: 'flex-start', marginBottom: 5}}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Icons name={blood} iconHeight={10} />
                    <Text style={{color: '#fff'}}>120/80</Text>
                  </View>
                  <Text style={{color: '#fff'}}>12 December, 2021</Text>
                </View>
                <Icons name={heartBeat} iconHeight={50} />
              </View>
              <View style={styles.graphContainer}>
                <View style={styles.container1}>
                  <View style={styles.mainContainer}>
                    <Icons name={breakHeart} iconHeight={50} />
                    <Text style={styles.mainContainerText}>70</Text>
                  </View>
                  <Icons
                    name={line}
                    style={{
                      position: 'absolute',
                      top: -3,
                    }}
                    iconHeight={70}
                  />
                </View>
                <View style={styles.container2}>
                  <View style={styles.mainContainer}>
                    <Icons name={meter} iconHeight={50} />
                    <Text style={styles.mainContainerText}>25</Text>
                  </View>
                  <Icons
                    name={line}
                    style={{
                      position: 'absolute',
                      top: -3,
                    }}
                    iconHeight={70}
                  />
                </View>
              </View>
              <View style={styles.healthDiaryView}>
                <Text>Reminders</Text>
                <Button
                  textStyles={{
                    color: 'rgba(0, 0, 0, 0.5)',
                    fontFamily: Typography.FONT_FAMILY_REGULAR,
                  }}>
                  View
                </Button>
              </View>
              <View
                style={{
                  fles: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                }}>
                <Reminder
                  bgColor="rgba(228,188,45, 0.2)"
                  heading="Medicine"
                  date="May 21, 2020">
                  Take <Text style={{fontWeight: 'bold'}}>Amoxicillin</Text> and
                  <Text style={{fontWeight: 'bold'}}> Paracetamol</Text> in 29
                  Minutes and 27 Seconds
                </Reminder>
                <Reminder
                  bgColor="rgba(40,47,75, 0.4)"
                  heading="Important Notes"
                  date="May 21, 2020">
                  Lorem ipsum dolor sit amet,sasata consetetur vwasa sadipscing
                  elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                </Reminder>
                <Reminder
                  bgColor="rgba(40,47,75, 0.2)"
                  heading="Appointment"
                  date="May 21, 2020">
                  Lorem ipsum dolor sit amet,sasata consetetur vwasa sadipscing
                  elitr, sed diam nonumy eirmod tempor
                </Reminder>
                <Reminder
                  bgColor="rgba(228,188,45, 0.4)"
                  heading="Important Notes"
                  date="May 21, 2020">
                  Lorem ipsum dolor sit amet,sasata consetetur vwasa
                </Reminder>
              </View>
              <View>
                <Text>My Profile</Text>
              </View>
              <View style={styles.myProfile}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image source={demo} />
                  <Text>Brian</Text>
                </View>
                <Button
                  buttonStyles={styles.manageProfile}
                  textStyles={{fontFamily: Typography.FONT_FAMILY_MEDIUM}}>
                  Manage
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 155,
          right: 15,
        }}>
        <Icons name={chat} iconHeight={50} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  profileView: {
    backgroundColor: '#282F4B',
    paddingHorizontal: 25,
    paddingVertical: 20,
    paddingBottom: 60,
  },
  changeProfileButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  mainImageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heyText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: FONT_FAMILY_LIGHT,
  },
  userFirstName: {
    color: '#fff',
    fontSize: 30,
    fontFamily: FONT_FAMILY_MEDIUM,
  },
  heartBeatView: {
    backgroundColor: '#4665E1',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  mainContainerText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  container2: {
    width: '44%',
    backgroundColor: '#8AA14A',
    borderRadius: 20,
    height: 117,
  },
  container1: {
    width: '44%',
    backgroundColor: '#E4BC2D',
    borderRadius: 20,
    height: 117,
  },
  healthDiaryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  myProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginVertical: 10,
    borderRadius: 24,
  },
  manageProfile: {
    backgroundColor: '#282F4B',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 11,
  },
});
