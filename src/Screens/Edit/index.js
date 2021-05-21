import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {calenderBlack} from '../../Assets/Icons';
import {Button, Header, Icons} from '../../Common';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Edit = ({navigation}) => {
  const [isDatePickerVisible, setisDatePickerVisible] = useState(false);
  const [date, setDate] = useState('');
  const [number, setnumber] = useState('');

  const hideDatePicker = () => {
    setisDatePickerVisible(false);
  };

  const handleConfirm = date => {
    const confirmDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    setDate(confirmDate);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 90}}>
        <View style={{flex: 1}}>
          <Header
            heading="Details"
            heading2="My"
            image={false}
            navigation={navigation}
          />
          <View style={styles.inputView}>
            <Text>E-mail</Text>
            <TextInput keyboardType="email-address" style={styles.input} />
          </View>
          <View style={styles.inputView}>
            <Text>Password</Text>
            <TextInput
              keyboardType="default"
              secureTextEntry
              style={styles.input}
            />
          </View>
          <View style={styles.inputView}>
            <Text>Name</Text>
            <TextInput keyboardType="default" style={styles.input} />
          </View>
          <View style={styles.inputView}>
            <Text>Mobile</Text>
            <PhoneInput
              defaultCode="PK"
              containerStyle={styles.phoneContainer}
              textInputStyle={{
                height: '170%',
                color: '#000',
              }}
              flagButtonStyle={{
                marginLeft: -15,
              }}
              textContainerStyle={{
                backgroundColor: 'transparent',
                marginLeft: -35,
              }}
              disableArrowIcon
              codeTextStyle={styles.phoneCodeText}
              textInputProps={{
                placeholderTextColor: 'rgba(0,0,0,0.4)',
                placeholder: '6545579169',
              }}
              value={number}
              onChangeText={e => setnumber(e)}
            />
            <View style={styles.inputView}>
              <Text>Date Of Birth</Text>
              <TouchableOpacity
                onPress={() => setisDatePickerVisible(true)}
                activeOpacity={1}>
                <View style={styles.calenderIcon}>
                  <Icons name={calenderBlack} iconHeight={100} />
                </View>
                <View style={styles.datePicker}>
                  <Text style={{color: '#000'}}>{date}</Text>
                </View>
              </TouchableOpacity>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                mode="date"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={[styles.inputView, {width: '46%'}]}>
              <Text>Height</Text>
              <TextInput
                keyboardType="default"
                secureTextEntry
                style={styles.input}
              />
            </View>
            <View style={[styles.inputView, {width: '46%'}]}>
              <Text>Weight</Text>
              <TextInput
                keyboardType="default"
                secureTextEntry
                style={styles.input}
              />
            </View>
          </View>
          <Button buttonStyles={styles.button}>Save</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Edit;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EFF3FE',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    marginTop: 5,
    paddingHorizontal: 15,
  },
  datePicker: {
    flex: 3.5,
    justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 14,
    height: 63,
    paddingHorizontal: 15,
  },
  calenderIcon: {
    position: 'absolute',
    zIndex: 999,
    right: 10,
    top: -20,
  },
  inputView: {
    marginVertical: 5,
  },
  phoneContainer: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    height: 63,
    paddingHorizontal: 15,
    color: '#000',
    width: '100%',
  },
  phoneCodeText: {
    color: '#000',
    borderRightWidth: 1,
    paddingRight: 10,
    borderRightColor: '#707070',
  },
  button: {
    backgroundColor: '#282F4B',
    borderRadius: 13,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
  },
});
