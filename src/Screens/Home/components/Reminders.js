import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Reminders = ({heading, children, date, bgColor}) => {
  return (
    <View style={[styles.reminderView, {backgroundColor: bgColor}]}>
      <Text>{heading}</Text>
      <Text style={{marginVertical: 5}}>{children}</Text>
      <Text>{date}</Text>
    </View>
  );
};

export default Reminders;

const styles = StyleSheet.create({
  reminderView: {
    borderRadius: 17,
    flexBasis: '48%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginBottom: 10,
    flexGrow: 0,
  },
});
