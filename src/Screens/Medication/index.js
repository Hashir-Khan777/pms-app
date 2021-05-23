import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {location, modalcalender} from '../../Assets/Icons';
import {medicine} from '../../Assets/images';
import {Button, Header, Icons} from '../../Common';
import {Typography} from '../../Styles';

const Medication = ({navigation}) => {
  const [data, setdata] = useState([
    {
      _id: 1,
      medicineName: 'Vicodin (Hydrocodone)',
      quantity: 1,
    },
    {
      _id: 2,
      medicineName: 'Simvastatin (Generic For Zocor)',
      quantity: 1,
    },
    {
      _id: 3,
      medicineName: 'Lisinopril (Generic For P',
      quantity: 1,
    },
  ]);
  const [confirm, setconfirm] = useState(false);

  const count = (index, substraction) => {
    let cloneData = [...data];
    cloneData[index].quantity =
      substraction === true
        ? data[index].quantity <= 1
          ? data[index].quantity
          : data[index].quantity - 1
        : data[index].quantity + 1;
    setdata(cloneData);
  };

  const OrderConfirmed = () => (
    <Modal visible={confirm} transparent={true} animationType="fade">
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Icons name={modalcalender} iconHeight={100} />
            <Text style={{fontSize: 19}}>Order Completed</Text>
          </View>
          <View style={{marginVertical: 15}}>
            <Text style={{textAlign: 'center', fontSize: 15}}>
              Thank You For Placing Your Order, Your Shipment Will Reach You
              Soon.
            </Text>
          </View>
          <Button
            onPress={() => navigation.navigate('Home')}
            buttonStyles={styles.modalButton}>
            Back Home
          </Button>
        </View>
      </View>
    </Modal>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EFF3FE'}}>
      <FlatList
        keyExtractor={item => item._id}
        data={data}
        contentContainerStyle={{paddingBottom: 30}}
        style={{paddingHorizontal: 20}}
        renderItem={({item, index}) => (
          <View style={styles.container}>
            <Text style={{width: '45%'}} numberOfLines={1}>
              {item.medicineName}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => count(index, true)}
                style={styles.count}>
                <Text style={{color: '#000'}}>-</Text>
              </TouchableOpacity>
              <Text style={{marginHorizontal: 15}}>{item.quantity}</Text>
              <TouchableOpacity
                style={styles.count}
                onPress={() => count(index, false)}>
                <Text style={{color: '#000'}}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListHeaderComponent={
          <>
            <Header
              navigation={navigation}
              heading="Reorder"
              heading2="Medication"
            />
            <View style={styles.card}>
              <View style={{width: '100%', height: 150}}>
                <Image
                  source={medicine}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.text}>
                <View>
                  <Text style={{marginBottom: 5}}>Albany Pharmacy</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icons name={location} iconHeight={15} />
                    <Text style={{color: 'rgba(0,0,0,0.5)'}} numberOfLines={1}>
                      91 Orchid Dr, Los Angel...
                    </Text>
                  </View>
                </View>

                <Button buttonStyles={styles.button}>Change</Button>
              </View>
            </View>
            <Text style={{marginBottom: 5}}>
              Are you sure you want to reorder the following?
            </Text>
          </>
        }
        ListFooterComponent={
          <View style={styles.priceSection}>
            <Text>Total</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text>s</Text>
              <Text
                style={{
                  color: '#282F4B',
                  fontSize: 18,
                  fontFamily: Typography.FONT_FAMILY_BOLD,
                }}>
                155
              </Text>
            </View>
          </View>
        }
      />
      <Button
        buttonStyles={{
          backgroundColor: '#282F4B',
          paddingVertical: 15,
        }}
        onPress={() => setconfirm(true)}>
        Confirm Order
      </Button>
      <OrderConfirmed />
    </SafeAreaView>
  );
};

export default Medication;

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '80%',
    paddingHorizontal: 30,
    paddingVertical: 30,
    borderRadius: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    backgroundColor: '#282F4B',
    borderRadius: 13,
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    marginTop: 10,
    paddingVertical: 23,
    paddingHorizontal: 15,
  },
  priceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    paddingTop: 10,
    borderTopWidth: 2,
    borderTopColor: '#707070',
  },
  count: {
    backgroundColor: '#EFF3FE',
    borderRadius: 50,
    paddingHorizontal: 13,
    paddingVertical: 6,
  },
});
