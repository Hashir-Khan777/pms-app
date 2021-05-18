import React, {useState} from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import {modalcalender} from '../../Assets/Icons';
import {Button, Header, Icons} from '../../Common';
import {Typography} from '../../Styles';

const AppointmentCalender = ({navigation}) => {
  const timeSlots = [
    {
      _id: 1,
      time: '7:30',
    },
    {
      _id: 2,
      time: '7:30',
    },
    {
      _id: 3,
      time: '7:30',
    },
    {
      _id: 4,
      time: '7:30',
    },
  ];

  const [booked, setbooked] = useState(false);
  const [answerIndex, setanswerIndex] = useState();

  const Booked = () => (
    <Modal visible={booked} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icons name={modalcalender} iconHeight={100} />
            <Text style={{fontSize: 19}}>Appoinment Booked!</Text>
          </View>
          <View style={{marginVertical: 15}}>
            <Text style={{textAlign: 'center', fontSize: 15}}>
              Thank You For Making A Booking With Surry Clinic You Will Receive
              A Confirmation On Your Email.
            </Text>
          </View>
          <Button
            onPress={() => navigation.navigate('Home')}
            buttonStyles={styles.modalButton}>
            Back Home
          </Button>
        </View>
      </View>
    </Modal>
  );

  const ansPress = index => {
    setanswerIndex(index);
  };

  return (
    <SafeAreaView style={styles.main}>
      <StatusBar
        translucent={true}
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#8AA14A',
            paddingHorizontal: 20,
            flex: 3,
          }}>
          <Header
            heading="Appointment"
            heading2="Book An"
            color="#FFF"
            navigation={navigation}
            headingStyles={{
              color: '#FFF',
            }}
          />
          <Text
            style={{
              color: '#FFF',
              marginBottom: 15,
              fontSize: 16,
              fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
            }}>
            Pick A Date & Time
          </Text>
          <CalendarPicker
            textStyle={{color: '#FFF'}}
            selectedDayStyle={{
              backgroundColor: '#282F4B',
              elevation: 6,
            }}
            selectedDayTextColor="#FFF"
          />
        </View>
        <View style={{flex: 1, paddingHorizontal: 20, marginTop: 10}}>
          <Text style={{fontFamily: Typography.FONT_FAMILY_SEMI_BOLD}}>
            Available Timeslots
          </Text>
          <FlatList
            data={timeSlots}
            horizontal
            keyExtractor={item => item._id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[
                    styles.options,
                    {
                      backgroundColor:
                        index === answerIndex ? '#E4BC2D' : '#FFF',
                    },
                  ]}
                  onPress={() => ansPress(index)}>
                  <Text
                    style={{
                      fontFamily: Typography.FONT_FAMILY_BOLD,
                      color: index === answerIndex ? '#FFF' : '#000',
                    }}>
                    {item.time}
                  </Text>
                  <Text
                    style={{color: index === answerIndex ? '#FFF' : '#000'}}>
                    pm
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => setbooked(true)}>
          <Text style={styles.text}>Book Your Appointment</Text>
        </TouchableOpacity>
      </View>
      <Booked />
    </SafeAreaView>
  );
};

export default AppointmentCalender;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
  },
  button: {
    backgroundColor: '#282F4B',
    paddingVertical: 15,
    marginTop: -10,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
  },
  options: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 20,
    marginTop: 10,
    elevation: 6,
  },
  modalView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: '#282F4B',
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
