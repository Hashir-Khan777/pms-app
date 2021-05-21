import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Typography} from '../../../Styles';

const section = ({icon, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.main} activeOpacity={0.8} onPress={onPress}>
      {icon}
      <Text style={{fontFamily: Typography.FONT_FAMILY_MEDIUM}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default section;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
