import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {demo} from '../../Assets/images';
import {Button, Header} from '../../Common';
import {Typography} from '../../Styles';

const Notes = ({navigation}) => {
  const data = [
    {
      _id: 1,
      image: demo,
      clinic: 'Surry Clinic',
      name: 'Amit Raj',
      date: '22/12/2020',
    },
    {
      _id: 2,
      image: demo,
      clinic: 'Surry Clinic',
      name: 'Amit Raj',
      date: '22/12/2020',
    },
    {
      _id: 3,
      image: demo,
      clinic: 'Surry Clinic',
      name: 'Amit Raj',
      date: '22/12/2020',
    },
    {
      _id: 4,
      image: demo,
      clinic: 'Surry Clinic',
      name: 'Amit Raj',
      date: '22/12/2020',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <View style={{flex: 1}}>
        <FlatList
          ListHeaderComponent={
            <Header
              heading="Notes"
              heading2="Clinical"
              navigation={navigation}
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
                <Text>{item.name}</Text>
                <Text style={{color: 'rgba(0,0,0,0.6)'}}>{item.clinic}</Text>
                <Text style={{color: 'rgba(0,0,0,0.8)'}}>{item.date}</Text>
              </View>
              <Button
                textStyles={{
                  fontFamily: Typography.FONT_FAMILY_MEDIUM,
                }}
                onPress={() => navigation.navigate('ClinicalNotes')}
                buttonStyles={styles.button}>
                View
              </Button>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notes;

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
});
