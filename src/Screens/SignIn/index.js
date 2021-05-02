import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button} from '../../Common';
import Input from '../../Common/Input';
import {FONT_FAMILY_BOLD, FONT_FAMILY_MEDIUM} from '../../Styles/typography';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const SignIn = ({navigation}) => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#282F4B" />
      <SafeAreaView>
        <View style={styles.mainInputView}>
          <View>
            <Text style={styles.heading1}>Let's sign you in</Text>
            <Text style={styles.heading2}>Welcome Back you've been missed</Text>
          </View>
          <View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Login</Text>
              <Input placeholder="Username or Email" placeholderColor="#fff" />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.label}>Password</Text>
              <Input
                placeholder="Password"
                secure={true}
                placeholderColor="#fff"
              />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.signupView}>
            <Text style={styles.signUpText}>Don't have an Account? </Text>
            <Button onPress={() => navigation}>Sign up!</Button>
          </View>
          <Button
            textStyles={{
              fontFamily: FONT_FAMILY_MEDIUM,
            }}
            buttonStyles={styles.buttonStyles}>
            Sign in
          </Button>
          <View style={styles.mainIconsView}>
            <Button
              buttonStyles={{
                width: 37,
                height: 37,
                backgroundColor: '#EA4335',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <FontAwesome5Icon name="google" color="#fff" size={15} />
            </Button>
            <Button
              buttonStyles={{
                width: 37,
                height: 37,
                backgroundColor: '#1C9CEA',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 10,
              }}>
              <FontAwesome5Icon name="twitter" color="#fff" size={15} />
            </Button>
            <Button
              buttonStyles={{
                width: 37,
                height: 37,
                backgroundColor: '#38529A',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome5Icon name="facebook-f" color="#fff" size={15} />
            </Button>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignIn;

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
  heading2: {
    fontSize: 24,
    color: '#fff',
    fontFamily: FONT_FAMILY_MEDIUM,
    lineHeight: 32,
  },
  inputView: {
    marginTop: 30,
  },
  signupView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  signUpText: {
    color: '#fff',
  },
  buttonStyles: {
    backgroundColor: '#E4BC2D',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    width: '100%',
    alignSelf: 'center',
  },
  mainInputView: {
    marginBottom: 100,
    marginTop: 40,
  },
  mainIconsView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
});
