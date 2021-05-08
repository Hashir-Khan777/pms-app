import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {demo} from '../../Assets/images';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Typography} from '../../Styles';

const HeaderComponent = ({
  heading,
  heading2,
  navigation,
  color,
  headingStyles,
}) => (
  <View style={styles.main}>
    <View style={styles.headingView}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <IonIcons name="chevron-back-outline" color={color} size={40} />
      </TouchableOpacity>
      {heading2 ? (
        <Text style={[{fontSize: 20}, headingStyles]}>{heading2}</Text>
      ) : null}
      <Text
        style={[
          {fontSize: 20, fontFamily: Typography.FONT_FAMILY_BOLD},
          headingStyles,
        ]}>
        {heading}
      </Text>
    </View>
    <View>
      <Image source={demo} style={{borderRadius: 10}} />
    </View>
  </View>
);

export default HeaderComponent;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  headingView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
