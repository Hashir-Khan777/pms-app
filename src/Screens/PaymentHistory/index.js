import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../../Common';

const PaymentHistory = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        contentContainerStyle={{paddingBottom: 90}}
        showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Header
            navigation={navigation}
            image={false}
            heading="History"
            heading2="Payment"
          />
          <View style={styles.container}>
            <View>
              <Text>Refferal Bonus</Text>
              <Text style={styles.date}>May 12, 2020</Text>
              <View style={styles.yellowContainer}>
                <Text style={styles.text}>Paid</Text>
              </View>
            </View>
            <View style={styles.paymentContainer}>
              <Text>$</Text>
              <Text style={styles.price}>12</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text>Refferal Bonus</Text>
              <Text style={styles.date}>May 12, 2020</Text>
              <View style={styles.greenContainer}>
                <Text style={styles.text}>Pending</Text>
              </View>
            </View>
            <View style={styles.paymentContainer}>
              <Text>$</Text>
              <Text style={styles.price}>12</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text>Refferal Bonus</Text>
              <Text style={styles.date}>May 12, 2020</Text>
              <View style={styles.yellowContainer}>
                <Text style={styles.text}>Paid</Text>
              </View>
            </View>
            <View style={styles.paymentContainer}>
              <Text>$</Text>
              <Text style={styles.price}>12</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text>Refferal Bonus</Text>
              <Text style={styles.date}>May 12, 2020</Text>
              <View style={styles.greenContainer}>
                <Text style={styles.text}>Pending</Text>
              </View>
            </View>
            <View style={styles.paymentContainer}>
              <Text>$</Text>
              <Text style={styles.price}>12</Text>
            </View>
          </View>
          <View style={styles.container}>
            <View>
              <Text>Refferal Bonus</Text>
              <Text style={styles.date}>May 12, 2020</Text>
              <View style={styles.yellowContainer}>
                <Text style={styles.text}>Paid</Text>
              </View>
            </View>
            <View style={styles.paymentContainer}>
              <Text>$</Text>
              <Text style={styles.price}>12</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentHistory;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  container: {
    backgroundColor: '#FFF',
    borderRadius: 19,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 10,
  },
  date: {
    color: 'rgba(0,0,0,0.5)',
    marginVertical: 5,
  },
  yellowContainer: {
    backgroundColor: '#E4BC2D',
    paddingVertical: 5,
    borderRadius: 8,
  },
  greenContainer: {
    backgroundColor: '#8AA14A',
    paddingVertical: 5,
    borderRadius: 8,
  },
  text: {
    color: '#FFF',
    textAlign: 'center',
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 27,
  },
});
