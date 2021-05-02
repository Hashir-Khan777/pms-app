import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Input from '../../Common/Input';
import {FONT_FAMILY_BOLD, FONT_FAMILY_MEDIUM} from '../../Styles/typography';

const SignIn = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#282F4B" />
      <ScrollView>
        <View>
          <Text style={styles.heading1}>Let's sign you in</Text>
          <Text>Welcome back you've been missed</Text>
        </View>
        <View>
          <View>
            <Text style={styles.label}>Username or Email</Text>
            <Input placeholder="Username or Email" placeholderColor="#fff" />
          </View>
          <View>
            <Text style={styles.label}>Password</Text>
            <Input placeholder="Password" placeholderColor="#fff" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
    fontSize: 18,
    color: '#fff',
    marginBottom: 6,
    fontFamily: FONT_FAMILY_MEDIUM,
    lineHeight: 24,
  },
  heading1: {
    fontSize: 32,
    color: '#fff',
    fontFamily: FONT_FAMILY_BOLD,
  },
});
