import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Typography} from '../../Styles';
import {Text} from '..';

const Button = ({buttonStyles, textStyles, onPress, children}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      activeOpacity={0.6}>
      <Text style={[style.defaultText, textStyles]}>{children}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  defaultText: {
    textAlign: 'center',
    color: '#fff',
    fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
  },
});

export default Button;
