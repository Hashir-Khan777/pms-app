import {CommonActions} from '@react-navigation/routers';
import React, {useEffect} from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {FONT_FAMILY_BOLD} from '../../Styles/typography';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(
      () =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{name: 'SignIn'}],
          }),
        ),
      3000,
    );
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#282F4B" />
      <Text style={styles.logo}>LOGO</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282F4B',
    alignItems: 'center',
  },
  logo: {
    color: '#E4BC2D',
    fontSize: 32,
    letterSpacing: 10,
    marginTop: 100,
    fontFamily: FONT_FAMILY_BOLD,
  },
});
