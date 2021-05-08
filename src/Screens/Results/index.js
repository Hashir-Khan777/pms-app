import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {Button, Header} from '../../Common';
import {Typography} from '../../Styles';

const Results = ({navigation}) => {
  const data = [
    {
      _id: 1,
      testName: 'Liver Function Tests',
      doctorName: 'Brij Patel',
    },
    {
      _id: 2,
      testName: 'Liver Function Tests',
      doctorName: 'Brij Patel',
    },
    {
      _id: 3,
      testName: 'Liver Function Tests',
      doctorName: 'Brij Patel',
    },
    {
      _id: 4,
      testName: 'Liver Function Tests',
      doctorName: 'Brij Patel',
    },
  ];

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <FlatList
          ListHeaderComponent={
            <Header heading="Results" heading2="Test" navigation={navigation} />
          }
          data={data}
          keyExtractor={item => item._id}
          contentContainerStyle={{paddingBottom: 80}}
          renderItem={({item}) => {
            return (
              <View style={styles.card}>
                <View>
                  <Text
                    style={{
                      fontFamily: Typography.FONT_FAMILY_SEMI_BOLD,
                    }}>
                    {item.testName}
                  </Text>
                  <Text>
                    by
                    <Text style={{fontWeight: '700'}}> {item.doctorName}</Text>
                  </Text>
                  <Text style={{color: 'rgba(139, 0, 0, 0.5)', marginTop: 4}}>
                    18/10/2020
                  </Text>
                </View>
                <Button
                  onPress={() => navigation.navigate('ResultDetails')}
                  textStyles={{
                    fontFamily: Typography.FONT_FAMILY_MEDIUM,
                    fontSize: 15,
                  }}
                  buttonStyles={styles.buttonStyles}>
                  Details
                </Button>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Results;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EFF3FE',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  buttonStyles: {
    backgroundColor: '#282F4B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
