import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const Input = ({placeholder, inputStyle, placeholderColor, secure}) => (
  <TextInput
    placeholder={placeholder}
    style={[styles.input, inputStyle]}
    placeholderTextColor={placeholderColor}
    secureTextEntry={secure}
  />
);

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'rgba(147, 153, 178, 0.5)',
    borderColor: '#707070',
    borderEndWidth: 1,
    borderRadius: 10,
    height: 63,
    paddingHorizontal: 15,
    color: '#fff',
  },
});
