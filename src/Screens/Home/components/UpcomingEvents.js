import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Icons} from '../../../Common';

const UpcomingEvents = ({name, text, buttonText, height, iconColor, onPress}) => {
  return (
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icons name={name} fill={iconColor} iconHeight={height} />
        <Text style={{marginLeft: 10}}>{text}</Text>
      </View>
      <Button textStyles={{color: 'rgba(0, 0, 0, 0.4)', fontSize: 14}} onPress={onPress}>
        {buttonText}
      </Button>
    </View>
  );
};

export default UpcomingEvents;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    height: 59,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
});
