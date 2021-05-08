import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {demo2} from '../../Assets/images';
import {Header} from '../../Common';

const ClinicalNotes = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Header heading="Notes" heading2="Clinical" navigation={navigation} />
          <View style={styles.imageView}>
            <Image source={demo2} />
            <View style={{marginLeft: 5}}>
              <Text>Amit Raj</Text>
              <Text style={{color: 'rgba(0,0,0,0.5)'}}>Surry Clinic</Text>
            </View>
          </View>
          <Text style={{marginVertical: 10, color: 'rgba(0,0,0,0.6)'}}>
            22 December, 2020
          </Text>
          <Text style={{fontSize: 15, lineHeight: 20, textAlign: 'justify'}}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ClinicalNotes;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  imageView: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 24,
    padding: 15,
  },
});
