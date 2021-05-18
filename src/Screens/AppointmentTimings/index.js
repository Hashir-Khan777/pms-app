import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../../Common';
import {Typography} from '../../Styles';
import QuestionComponent from './components/QuestionComponent';

const AppointmentTiming = ({navigation}) => {
  const [questions, setquestions] = useState([
    {
      _id: 1,
      question: 'What was the last time you met a Doctor?',
      options: [
        {
          _id: 11,
          option: '3 Months ago',
        },
        {
          _id: 12,
          option: '6 Months ago',
        },
        {
          _id: 13,
          option: '2 Years ago',
        },
        {
          _id: 14,
          option: '5+ years ago',
        },
      ],
      bgColor: '#E4BC2D',
      selectedAnswer: '',
    },
    {
      _id: 2,
      question: 'When did you have your last blood test done?',
      options: [
        {
          _id: 15,
          option: '3 Months ago',
        },
        {
          _id: 16,
          option: '6 Months ago',
        },
        {
          _id: 17,
          option: '2 Years ago',
        },
        {
          _id: 18,
          option: '5+ years ago',
        },
      ],
      bgColor: '#8AA14A',
      selectedAnswer: '',
    },
  ]);

  const getAnswer = (index, answer) => {
    let cloneQuestions = [...questions];
    cloneQuestions[index].selectedAnswer = answer;
    setquestions(cloneQuestions);
  };

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <FlatList
          data={questions}
          ListHeaderComponent={
            <View style={{marginHorizontal: 20}}>
              <Header
                heading="Appointment"
                heading2="Book An"
                navigation={navigation}
              />
            </View>
          }
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item._id}
          renderItem={({item, index}) => (
            <QuestionComponent
              item={item}
              onPressAns={answer => getAnswer(index, answer)}
              ansData={item}
            />
          )}
          ListFooterComponent={
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => navigation.navigate('AppointmentCalender')}
              style={styles.button}>
              <Text style={styles.text}>Proceed</Text>
            </TouchableOpacity>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default AppointmentTiming;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
  },
  button: {
    flexDirection: 'column',
    backgroundColor: '#282F4B',
    paddingVertical: 15,
    marginTop: 15,
    flexBasis: '100%',
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 15,
    fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
  },
});
