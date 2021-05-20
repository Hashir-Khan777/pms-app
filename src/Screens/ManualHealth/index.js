import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {blackBlood, height, weight, yellowBreakHeart} from '../../Assets/Icons';
import {Header, Icons} from '../../Common';
import {Typography} from '../../Styles';

const ManualHealth = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{paddingHorizontal: 20}}>
        <Header navigation={navigation} heading="Entry" heading2="Manual" />
        <View style={styles.inputView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icons fill="#000" name={blackBlood} iconHeight={10} />
            <Text>Blood Pressure</Text>
          </View>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputView}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icons fill="#000" name={yellowBreakHeart} iconHeight={10} />
            <Text>Heart Rate</Text>
          </View>
          <TextInput style={styles.input} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={[styles.inputView, {width: '48%'}]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icons fill="#000" name={height} iconHeight={10} />
              <Text>Height</Text>
            </View>
            <TextInput style={styles.input} />
          </View>
          <View style={[styles.inputView, {width: '48%'}]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icons fill="#000" name={weight} iconHeight={10} />
              <Text>Weight</Text>
            </View>
            <TextInput style={styles.input} />
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={() => navigation.navigate('HealthDiary')}>
        <Text style={styles.text}>Save Measurements</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ManualHealth;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 14,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  inputView: {
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#282F4B',
    paddingVertical: 15,
    marginTop: 15,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
  },
});
