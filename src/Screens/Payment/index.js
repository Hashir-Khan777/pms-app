import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  bankAccount,
  creditCard,
  history,
  paymentMethod,
} from '../../Assets/Icons';
import {Button, Header, Icons} from '../../Common';
import {Typography} from '../../Styles';

const Payment = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Header
            image={false}
            navigation={navigation}
            heading="Settings"
            heading2="Payment"
          />
          <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name={paymentMethod} iconHeight={20} />
              <Text style={{marginLeft: 6}}>Payment Method</Text>
            </View>
            <View>
              <Text style={{color: 'rgba(0,0,0,0.6)'}}>Card</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name={bankAccount} iconHeight={20} />
              <Text style={{marginLeft: 6}}>Direct Debit Bank Account</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name={creditCard} iconHeight={20} />
              <Text style={{marginLeft: 6}}>Credit Card</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentHistory')}
            activeOpacity={0.6}
            style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icons name={history} iconHeight={20} />
              <Text style={{marginLeft: 6}}>History</Text>
            </View>
          </TouchableOpacity>
          <View style={[styles.viewContainer, {marginBottom: 90}]}>
            <Text style={{fontFamily: Typography.FONT_FAMILY_MEDIUM}}>
              Activate Clinic
            </Text>
            <TextInput
              placeholder="Enter Activation Code"
              placeholderTextColor="rgba(0, 0, 0, 0, 0.6)"
              style={styles.input}
            />
            <Button
              onPress={() => navigation.navigate('Profile')}
              buttonStyles={styles.button}>
              Activate
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderRadius: 14,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  viewContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#EFF3FE',
    borderRadius: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#282F4B',
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
});
