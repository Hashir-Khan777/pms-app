import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {demo} from '../../Assets/images';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Typography} from '../../Styles';

const HeaderComponent = ({heading}) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 30,
    }}>
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}>
      <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.goBack()}>
        <IonIcons name="chevron-back-outline" size={40} />
      </TouchableOpacity>
      <Text style={{fontSize: 20, fontFamily: Typography.FONT_FAMILY_BOLD}}>
        {heading}
      </Text>
    </View>
    <View>
      <Image source={demo} style={{borderRadius: 10}} />
    </View>
  </View>
);

export default HeaderComponent;
