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
import {Typography} from '../../Styles';

const ResultDetails = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Header
            heading="Results"
            heading2="Test"
            color="#fff"
            headingStyles={{
              color: '#fff',
            }}
            navigation={navigation}
          />
          <View>
            <View>
              <View style={styles.section}>
                <Image source={demo2} />
                <View style={{marginLeft: 5}}>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: Typography.FONT_FAMILY_MEDIUM,
                    }}>
                    Dr. Brij Patel
                  </Text>
                  <Text style={{color: 'rgba(0, 0, 0, 0.5)'}}>
                    Surry Clininc
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={[
                styles.section,
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                },
              ]}>
              <View>
                <Text>Total Bilirubin:</Text>
              </View>
              <View>
                <Text>16 umol/L {'<'} 25</Text>
              </View>
            </View>

            <View
              style={[
                styles.section,
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                },
              ]}>
              <View>
                <Text>Alk. Phosphatase:</Text>
              </View>
              <View>
                <Text>65 U/L ( 40 - 130 )</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={[
                  styles.section,
                  {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexBasis: '47%',
                  },
                ]}>
                <Text>GGT:</Text>
                <Text>: 65 U/L ( {'<'} 60 ) H</Text>
              </View>

              <View
                style={[
                  styles.section,
                  {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexBasis: '47%',
                  },
                ]}>
                <Text>GGT:</Text>
                <Text>: 65 U/L ( {'<'} 60 ) H</Text>
              </View>
            </View>

            <View
              style={[
                styles.section,
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                },
              ]}>
              <View>
                <Text>Total Protein:</Text>
              </View>
              <View>
                <Text>70 g/L ( 61 - 79 )</Text>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View
                style={[
                  styles.section,
                  {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexBasis: '47%',
                  },
                ]}>
                <Text>Albumin</Text>
                <Text>44 g/L ( 32 - 48 )</Text>
              </View>

              <View
                style={[
                  styles.section,
                  {
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flexBasis: '47%',
                  },
                ]}>
                <Text>Globulin:</Text>
                <Text>26 g/L ( 20 - 36 )</Text>
              </View>
            </View>

            <View>
              <Text style={styles.heading}>Order by</Text>
              <View
                style={[
                  styles.section,
                  {flexDirection: 'column', alignItems: 'flex-start'},
                ]}>
                <Text>Dr. Brij Patel</Text>
                <Text style={{marginVertical: 5}}>
                  <Text style={{color: 'rgba(0,0,0,0.5)'}}>Laboratory:</Text>{' '}
                  Labtest
                </Text>
                <Text style={{color: 'rgba(139,0,0,0.5)'}}>18/10/2020</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderRadius: 13,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 25,
  },
  main: {
    flex: 1,
    backgroundColor: '#282F4B',
    paddingHorizontal: 20,
  },
  heading: {
    color: '#fff',
    marginBottom: 10,
    fontSize: 18,
  },
});
