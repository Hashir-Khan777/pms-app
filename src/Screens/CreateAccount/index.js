import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Icons, Input} from '../../Common';
import {FONT_FAMILY_BOLD, FONT_FAMILY_MEDIUM} from '../../Styles/typography';
import {backIcon, calender} from '../../Assets/Icons';
import PhoneInput from 'react-native-phone-number-input';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const CreateAccount = ({navigation}) => {
  const dateClass = new Date();
  const [isDatePickerVisible, setisDatePickerVisible] = useState(false);
  const [date, setDate] = useState(
    `${dateClass.getDate()}/${
      dateClass.getMonth() + 1
    }/${dateClass.getFullYear()}`,
  );
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
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#282F4B" />
      <SafeAreaView>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => navigation.goBack()}
          style={{
            marginTop: 20,
          }}>
          <Icons name={backIcon} iconHeight={30} fill={'#fff'} />
        </TouchableOpacity>
        <View style={styles.mainInputView}>
          <View>
            <Text style={styles.heading1}>Create Your Account</Text>
          </View>
          <View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Email</Text>
              <Input
                placeholder="Email"
                type="email-address"
                placeholderColor="#fff"
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Password</Text>
              <Input
                placeholder="Password"
                secure={true}
                type="default"
                placeholderColor="#fff"
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Name</Text>
              <Input
                placeholder="John"
                type="default"
                placeholderColor="#fff"
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Mobile</Text>
              <PhoneInput
                defaultCode="PK"
                containerStyle={styles.phoneContainer}
                textInputStyle={{
                  height: '170%',
                  color: '#fff',
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
                textInputProps={{placeholderTextColor: '#fff'}}
                value={number}
                onChangeText={e => setnumber(e)}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Date Of Birth</Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
                onPress={() => setisDatePickerVisible(true)}
                activeOpacity={1}>
                <View style={styles.calenderIcon}>
                  <Icons name={calender} iconHeight={100} />
                </View>
                <View style={styles.datePicker}>
                  <Text style={{color: '#fff'}}>{date}</Text>
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
        </View>
        <View>
          <Button
            textStyles={{
              fontFamily: FONT_FAMILY_MEDIUM,
            }}
            buttonStyles={styles.buttonStyles}
            onPress={() => navigation.navigate('Home')}>
            Sign Up
          </Button>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default CreateAccount;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282F4B',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 8,
    fontFamily: FONT_FAMILY_MEDIUM,
    lineHeight: 24,
  },
  heading1: {
    fontSize: 32,
    color: '#fff',
    fontFamily: FONT_FAMILY_BOLD,
  },
  inputView: {
    marginTop: 30,
  },
  buttonStyles: {
    backgroundColor: '#E4BC2D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  mainInputView: {
    marginBottom: 40,
    marginTop: 40,
  },
  datePicker: {
    flex: 3.5,
    justifyContent: 'center',
    backgroundColor: 'rgba(147, 153, 178, 0.5)',
    borderColor: '#707070',
    borderRadius: 0,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderEndWidth: 1,
    height: 63,
    paddingHorizontal: 15,
  },
  calenderIcon: {
    flex: 1,
    backgroundColor: '#fff',
    height: 63,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  phoneContainer: {
    backgroundColor: 'rgba(147, 153, 178, 0.5)',
    borderColor: '#707070',
    borderEndWidth: 1,
    borderRadius: 10,
    height: 63,
    paddingHorizontal: 15,
    color: '#fff',
    width: '100%',
  },
  phoneCodeText: {
    color: '#fff',
    borderRightWidth: 1,
    paddingRight: 10,
    borderRightColor: '#707070',
  },
});
