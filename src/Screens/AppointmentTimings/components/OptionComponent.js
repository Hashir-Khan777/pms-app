import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const OptionComponent = ({optionItem, selected, bgColor, onPressAns}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[
        styles.option,
        {
          backgroundColor: selected === optionItem ? bgColor : '#EFF3FE',
        },
      ]}
      onPress={() => onPressAns(optionItem)}>
      <Text
        style={{
          fontSize: 16,
          color: selected === optionItem ? '#FFF' : '#000',
        }}>
        {optionItem.option}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionComponent;

const styles = StyleSheet.create({
  option: {
    marginTop: 10,
    borderRadius: 13,
    padding: 10,
  },
});
