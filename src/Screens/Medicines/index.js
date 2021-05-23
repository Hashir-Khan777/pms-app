import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Icons, Header} from '../../Common';
import {basket} from '../../Assets/Icons';

const Medicines = ({navigation}) => {
  const data = [
    {
      medicineName: 'Paracetamol',
      doctorName: 'Dr. Brij Patel',
      bgColor: '#D0D5E2',
    },
    {
      medicineName: 'Paracetamol',
      doctorName: 'Dr. Brij Patel',
      bgColor: '#FEF6D8',
    },
    {
      medicineName: 'Paracetamol',
      doctorName: 'Dr. Brij Patel',
      bgColor: '#D6D8DD',
    },
    {
      medicineName: 'Amoxicillin',
      doctorName: 'Dr. Mike Pitt',
      bgColor: '#EDEADD',
    },
    {
      medicineName: 'Amoxicillin',
      doctorName: 'Dr. Mike Pitt',
      bgColor: '#DDE3F4',
    },
    {
      medicineName: 'Amoxicillin',
      doctorName: 'Dr. Mike Pitt',
      bgColor: '#F2EDD3',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.bgColor}
          data={data}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          contentContainerStyle={{paddingBottom: 80}}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate('Prescription', {bgColor: item.bgColor})
                }
                style={[styles.touchable, {backgroundColor: item.bgColor}]}>
                <View style={{marginBottom: 10}}>
                  <Text>{item.medicineName}</Text>
                  <Text>500 Mg Cap</Text>
                </View>
                <View style={{marginBottom: 10}}>
                  <Text>Prescribed By</Text>
                  <Text>{item.doctorName}</Text>
                </View>
                <View>
                  <Text style={{color: '#8B0000', fontSize: 12}}>
                    18/10/2020
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          ListHeaderComponent={
            <Header heading="Prescriptions" navigation={navigation} />
          }
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('RepeatPrescrption')}
          style={styles.icon}>
          <Icons name={basket} iconHeight={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Medicines;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  icon: {
    position: 'absolute',
    backgroundColor: '#E4BC2D',
    right: 0,
    bottom: 90,
    padding: 20,
    borderRadius: 50,
    elevation: 10,
  },
  touchable: {
    flexBasis: '47%',
    marginBottom: 10,
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
