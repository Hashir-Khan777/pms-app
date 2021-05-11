import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from '../Input';
import IonIcon from 'react-native-vector-icons/Ionicons';

const SearchBar = ({inputStyles}) => {
  return (
    <View style={[styles.mainView, inputStyles]}>
      <IonIcon name="search-outline" color="#E4BC2D" size={25} />
      <Input
        placeholder="Search Doctors, Hospitals..."
        placeholderColor="#A2A2A2"
        inputStyle={styles.inputStyle}
        type="default"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputStyle: {
    width: '85%',
    backgroundColor: '#fff',
    color: '#000',
  },
  mainView: {
    top: -30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    alignSelf: 'center',
    width: '85%',
    borderRadius: 20,
    paddingLeft: 10,
    elevation: 5,
  },
});
