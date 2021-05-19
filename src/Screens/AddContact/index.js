import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';
import {demo} from '../../Assets/images';
import {Button, Header} from '../../Common';
import {Typography} from '../../Styles';

const AddContact = ({navigation}) => {
  const data = [
    {
      _id: 1,
      image: demo,
      clinic: 'Heart Specialist',
      name: 'Amit Raj',
      clinicName: 'Surry Clinic',
    },
    {
      _id: 2,
      image: demo,
      clinic: 'Heart Specialist',
      name: 'Amit Raj',
      clinicName: 'Surry Clinic',
    },
    {
      _id: 3,
      image: demo,
      clinic: 'Heart Specialist',
      name: 'Amit Raj',
      clinicName: 'Surry Clinic',
    },
    {
      _id: 4,
      image: demo,
      clinic: 'Heart Specialist',
      name: 'Amit Raj',
      clinicName: 'Surry Clinic',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        ListHeaderComponent={
          <Header
            navigation={navigation}
            heading="Pactitioner"
            searchBar
            heading2="Select"
          />
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
              <Text style={{color: 'rgba(0,0,0,1)', textAlign: 'center'}}>
                {item.clinic}
              </Text>
              <Text style={{color: 'rgba(0,0,0,0.6)', textAlign: 'center'}}>
                {item.clinicName}
              </Text>
            </View>
            <Button
              textStyles={{
                fontFamily: Typography.FONT_FAMILY_MEDIUM,
              }}
              onPress={() => navigation.navigate('Message')}
              buttonStyles={styles.button}>
              Message
            </Button>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default AddContact;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EFF3FE',
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
});
