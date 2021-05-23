import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {demo} from '../../Assets/images';
import {Button, Header} from '../../Common';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {Typography} from '../../Styles';

const ChildAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{flex: 1}}>
          <Header
            heading={`Child's Account`}
            heading2="Associate Your"
            image={false}
            navigation={navigation}
          />
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <Image style={{borderRadius: 50}} source={demo} />
              <Text style={{marginLeft: 5}}>Ryan Smith</Text>
            </View>
            <IonIcon
              name="chevron-forward-outline"
              size={20}
              style={styles.icon}
              color="#FFF"
            />
          </View>
          <View style={[styles.viewContainer, {marginBottom: 90}]}>
            <Text style={{fontFamily: Typography.FONT_FAMILY_MEDIUM}}>
              Activate Clinic
            </Text>
            <TextInput
              placeholder="Enter Activation Code"
              placeholderTextColor="rgba(0, 0, 0, 0, 0.6)"
              style={styles.input}
            />
            <Button
              onPress={() => navigation.navigate('Profile')}
              buttonStyles={styles.button}>
              Activate
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ChildAccount;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: '#EFF3FE',
    borderRadius: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#282F4B',
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  container: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  viewContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    backgroundColor: '#282F4B',
    borderRadius: 50,
    padding: 8,
  },
});
