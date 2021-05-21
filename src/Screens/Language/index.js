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

const Language = ({navigation}) => {
  const [language, setlanguage] = useState(0);

  const data = [
    {
      _id: 1,
      text: `Hi, I'm Dan`,
      language: 'English',
    },
    {
      _id: 2,
      text: `Hola, Soy dan`,
      language: 'Spanish',
    },
    {
      _id: 3,
      text: `你好 我是丹`,
      language: 'Chinese',
    },
    {
      _id: 4,
      text: `Привет, Я Дэн`,
      language: 'Russian',
    },
    {
      _id: 5,
      text: `ہیلو، میں ڈین ہوں`,
      language: 'Urdu',
    },
    {
      _id: 6,
      text: `مرحبا، أنا دان`,
      language: 'Arabic',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        ListHeaderComponent={
          <Header heading="Language" navigation={navigation} image={false} />
        }
        data={data}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        contentContainerStyle={{paddingBottom: 90}}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={[
              styles.container,
              language === index
                ? {backgroundColor: '#282F4B'}
                : {backgroundColor: '#FFF'},
            ]}
            onPress={() => setlanguage(index)}>
            <Text
              style={{
                fontSize: 20,
                color: language === index ? '#E4BC2D' : '#000',
              }}>
              {item.text}
            </Text>
            <Text
              style={{
                fontFamily: Typography.FONT_FAMILY_MEDIUM,
                color: language === index ? '#E4BC2D' : '#000',
              }}>
              {item.language}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Language;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    marginTop: 10,
    flexBasis: '48%',
    height: 140,
    flexDirection: 'column',
    justifyContent: 'space-between',
    elevation: 6,
  },
});
