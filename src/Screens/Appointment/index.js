import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {demo, image1, image2, image3} from '../../Assets/images';
import {Button, Header, Icons} from '../../Common';
import {location} from '../../Assets/Icons';

const Appointment = ({navigation}) => {
  const data = [
    {
      _id: 1,
      image: image1,
      clinicName: 'Sunny Clinic',
      doctorName: '91 Orchid Dr, Los Angel...',
    },
    {
      _id: 2,
      image: image2,
      clinicName: 'Sunny Clinic',
      doctorName: '91 Orchid Dr, Los Angel...',
    },
    {
      _id: 3,
      image: image3,
      clinicName: 'Sunny Clinic',
      doctorName: '91 Orchid Dr, Los Angel...',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <Header
                heading="Appointment"
                heading2="Book An"
                searchBar={true}
              />
              <Text style={{marginBottom: 15, fontSize: 17}}>
                Select A Clinic
              </Text>
            </>
          }
          keyExtractor={item => item._id}
          contentContainerStyle={{paddingBottom: 80, paddingHorizontal: 20}}
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <View style={styles.card}>
              <View style={{width: '100%', height: 150}}>
                <Image
                  source={item.image}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.text}>
                <View>
                  <Text style={{marginBottom: 5}}>{item.clinicName}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icons name={location} iconHeight={15} />
                    <Text style={{color: 'rgba(0,0,0,0.5)'}} numberOfLines={1}>
                      {' '}
                      {item.doctorName}
                    </Text>
                  </View>
                </View>

                <Button
                  onPress={() => navigation.navigate('BookAppointment')}
                  buttonStyles={styles.button}>
                  Book
                </Button>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Appointment;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
  },
  card: {
    backgroundColor: '#FFF',
    marginBottom: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: '#282F4B',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 11,
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 15,
  },
  image: {
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
