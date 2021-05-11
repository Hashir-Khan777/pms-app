import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Button, Header, Icons} from '../../Common';
import {brain, head, heart, tooth} from '../../Assets/Icons';
import {demo} from '../../Assets/images';
import {Typography} from '../../Styles';

const BookAppointment = ({navigation}) => {
  const bannerData = [
    {
      _id: 1,
      image: brain,
      tagLine: 'Cardioligist',
      bgColor: true,
    },
    {
      _id: 2,
      image: head,
      tagLine: 'Nurosergeon',
    },
    {
      _id: 3,
      image: heart,
      tagLine: 'Cardioligist',
    },
    {
      _id: 4,
      image: tooth,
      tagLine: 'Dentist',
    },
    {
      _id: 5,
      image: head,
      tagLine: 'Cardioligist',
    },
    {
      _id: 6,
      image: heart,
      tagLine: 'Cardioligist',
    },
  ];

  const data = [
    {
      _id: 1,
      image: demo,
      clinic: 'Heart Specialist',
      name: 'Amit Raj',
    },
    {
      _id: 2,
      image: demo,
      clinic: 'Heart Specialist',
      name: 'Amit Raj',
    },
    {
      _id: 3,
      image: demo,
      clinic: 'Heart Specialist',
      name: 'Amit Raj',
    },
    {
      _id: 4,
      image: demo,
      clinic: 'Heart Specialist',
      name: 'Amit Raj',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <View style={{flex: 1}}>
        <FlatList
          ListHeaderComponent={
            <>
              <Header
                heading="Appointment"
                heading2="Book An"
                searchBar
                navigation={navigation}
              />
              <Text style={{fontSize: 16, marginTop: -10}}>
                Select A Pactitioner
              </Text>
              <FlatList
                style={{marginVertical: 15}}
                data={bannerData}
                horizontal
                keyExtractor={item => item._id}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                  return (
                    <View
                      style={[
                        styles.slideCard,
                        item.bgColor ? {backgroundColor: '#8AA14A'} : null,
                      ]}>
                      <Icons fill="#000" name={item.image} iconHeight={40} />
                      <Text style={item.bgColor ? {color: '#FFF'} : null}>
                        {item.tagLine}
                      </Text>
                    </View>
                  );
                }}
              />
            </>
          }
          numColumns={2}
          keyExtractor={item => item._id}
          data={data}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 80}}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={styles.imageView}>
                <Image source={item.image} style={{borderRadius: 20}} />
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={{textAlign: 'center'}}>{item.name}</Text>
                <Text style={{color: 'rgba(0,0,0,0.6)', textAlign: 'center'}}>
                  {item.clinic}
                </Text>
              </View>
              <Button
                textStyles={{
                  fontFamily: Typography.FONT_FAMILY_MEDIUM,
                }}
                buttonStyles={styles.button}>
                Book
              </Button>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default BookAppointment;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    flexBasis: '47%',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 20,
    borderRadius: 24,
    elevation: 8,
  },
  button: {
    backgroundColor: '#282F4B',
    borderRadius: 11,
    paddingVertical: 5,
    paddingHorizontal: 35,
  },
  imageView: {
    borderRadius: 20,
    elevation: 4,
    backgroundColor: 'red',
  },
  slideCard: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20,
    elevation: 8,
    marginBottom: 10,
  },
});
