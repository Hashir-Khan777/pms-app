import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, Header, Icons} from '../../Common';
import {tick} from '../../Assets/Icons';

const RepeatPrescrption = ({navigation}) => {
  const [data, setData] = useState([
    {
      _id: 1,
      medicineName: 'Paracetamol',
      doctorName: 'Dr. Brij Patel',
      bgColor: '#9CE0E9',
      checked: false,
    },
    {
      _id: 2,
      medicineName: 'Paracetamol',
      doctorName: 'Dr. Brij Patel',
      bgColor: '#B2EFE6',
      checked: false,
    },
    {
      _id: 3,
      medicineName: 'Paracetamol',
      doctorName: 'Dr. Brij Patel',
      bgColor: '#FEF6D8',
      checked: false,
    },
    {
      _id: 4,
      medicineName: 'Amoxicillin',
      doctorName: 'Dr. Mike Pitt',
      bgColor: '#A6EAF7',
      checked: false,
    },
  ]);

  const getAnswer = index => {
    let cloneData = [...data];
    cloneData[index].checked
      ? (cloneData[index].checked = false)
      : (cloneData[index].checked = true);
    setData(cloneData);
  };

  return (
    <SafeAreaView style={styles.main}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
        data={data}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
        }}
        style={{
          paddingHorizontal: 20,
        }}
        contentContainerStyle={{paddingBottom: 80}}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => getAnswer(index)}
              style={[styles.touchable, {backgroundColor: item.bgColor}]}>
              <View style={{marginBottom: 10}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text>{item.medicineName}</Text>
                  {item.checked === true ? (
                    <Icons name={tick} iconHeight={17} />
                  ) : (
                    <View style={styles.tick}></View>
                  )}
                </View>
                <Text>500 Mg Cap</Text>
              </View>
              <View style={{marginBottom: 10}}>
                <Text>Prescribed By</Text>
                <Text>{item.doctorName}</Text>
              </View>
              <View>
                <Text style={{color: 'rgba(139, 0, 0, 0.5)', fontSize: 12}}>
                  18/10/2020
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        ListHeaderComponent={
          <>
            <Header
              heading="Prescriptions"
              heading2="Reapeat"
              navigation={navigation}
            />
            <View style={styles.select}>
              <Text>Select Medicine</Text>
              <TouchableOpacity activeOpacity={0.6}>
                <Text>Select All</Text>
              </TouchableOpacity>
            </View>
          </>
        }
      />
      <Button
        buttonStyles={{
          backgroundColor: '#282F4B',
          paddingVertical: 15,
        }}
        onPress={() => navigation.navigate('Medication')}>
        Reorder Now!
      </Button>
    </SafeAreaView>
  );
};

export default RepeatPrescrption;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
  },
  touchable: {
    flexBasis: '47%',
    marginBottom: 10,
    borderRadius: 14,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  tick: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  select: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
