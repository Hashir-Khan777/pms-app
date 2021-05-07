import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {demo2} from '../../Assets/images';
import {Header} from '../../Common';
import {Typography} from '../../Styles';

const Prescription = ({route}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: route.params.bgColor,
      }}>
      <Header heading="Prescriptions" />
      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
        <Image source={demo2} />
        <View style={{paddingLeft: 10}}>
          <Text
            style={{fontSize: 15, fontFamily: Typography.FONT_FAMILY_MEDIUM}}>
            Amit Raj
          </Text>
          <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>Surry Clinic</Text>
        </View>
      </View>
      <Text style={{marginBottom: 10, color: 'rgba(0, 0, 0, 0.5)'}}>
        22 December 2020
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
        elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
        aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
      </Text>
    </SafeAreaView>
  );
};

export default Prescription;

const styles = StyleSheet.create({});
