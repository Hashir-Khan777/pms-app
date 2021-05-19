import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {demo} from '../../Assets/images';
import {Header} from '../../Common';
import {Typography} from '../../Styles';

const MyMessages = ({navigation}) => {
  const data = [
    {
      _id: 1,
      image: demo,
      name: 'Dr. Brij Patel',
      message: 'You have a new test result',
    },
    {
      _id: 2,
      image: demo,
      name: 'Dr. Brij Patel',
      message: 'Your prescription has been sent to Albany',
    },
    {
      _id: 3,
      image: demo,
      name: 'Dr. Brij Patel',
      message: 'You have a new test result',
    },
    {
      _id: 4,
      image: demo,
      name: 'Dr. Brij Patel',
      message: 'Your prescription has been sent to Albany',
    },
    {
      _id: 5,
      image: demo,
      name: 'Dr. Brij Patel',
      message: 'You have a new test result',
    },
    {
      _id: 6,
      image: demo,
      name: 'Dr. Brij Patel',
      message: 'Your prescription has been sent to Albany',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        style={{flex: 1}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 80,
        }}
        ListHeaderComponent={
          <>
            <Header
              navigation={navigation}
              heading="Messages"
              heading2="My"
              searchBar
            />
            <Text style={{color: '#A2A2A2'}}>22 December, 2020</Text>
          </>
        }
        data={data}
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.messageCard}
            onPress={() => navigation.navigate('Message')}>
            <Image style={{borderRadius: 50}} source={item.image} />
            <View style={{marginLeft: 10}}>
              <Text style={{fontFamily: Typography.FONT_FAMILY_MEDIUM}}>
                {item.name}
              </Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('AddContact')}
        style={styles.addButton}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyMessages;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  messageCard: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderRadius: 24,
  },
  message: {
    fontSize: 13,
    width: '90%',
    marginTop: 3,
  },
  addButton: {
    position: 'absolute',
    bottom: 85,
    right: 30,
    backgroundColor: '#E4BC2D',
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 21,
    elevation: 7,
  },
  addText: {
    fontSize: 35,
    color: '#FFF',
  },
});
