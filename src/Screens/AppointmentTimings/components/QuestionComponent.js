import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import OptionComponent from './OptionComponent';

const QuestionComponent = ({item, onPressAns, ansData}) => (
  <View style={styles.question}>
    <Text style={{fontSize: 18, marginBottom: 5}}>{item.question}</Text>
    <FlatList
      data={item.options}
      keyExtractor={item => item._id}
      renderItem={({item}) => (
        <OptionComponent
          optionItem={item}
          onPressAns={answer => onPressAns(answer)}
          selected={ansData.selectedAnswer}
          bgColor={ansData.bgColor}
        />
      )}
    />
  </View>
);

export default QuestionComponent;

const styles = StyleSheet.create({
  question: {
    backgroundColor: '#FFF',
    marginBottom: 10,
    padding: 20,
    borderRadius: 20,
    marginHorizontal: 10,
  },
});
