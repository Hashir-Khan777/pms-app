import React, {useState} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import {profile} from '../../Assets/images';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {Button, Icons} from '../../Common';
import {
  activateClinic,
  childAccount,
  description,
  edit,
  hospital,
  instantSignIn,
  language,
  notification,
  payment,
  privacy,
  rate,
} from '../../Assets/Icons';
import {Typography} from '../../Styles';
import {Section} from './components';

const Profile = ({navigation}) => {
  const [clinic, setclinic] = useState(false);
  const [activeClinic, setactiveClinic] = useState(false);

  const ClinicModal = () => (
    <Modal visible={clinic} transparent animationType="fade">
      <View style={styles.modalView}>
        <View style={styles.modalContainer}>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <Icons iconHeight={50} name={hospital} />
            <Text>Activate Clinic</Text>
          </View>
          <Text>Enter your Date of Birth</Text>
          <TextInput style={styles.input} />
          <Button
            buttonStyles={styles.button}
            onPress={() => {
              setclinic(false);
              setactiveClinic(true);
            }}>
            Activate
          </Button>
        </View>
      </View>
    </Modal>
  );

  const ActiveClinicModal = () => (
    <Modal visible={activeClinic} transparent animationType="fade">
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setactiveClinic(false)}
        style={styles.modalView}>
        <View style={styles.modalContainer}>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <Icons iconHeight={50} name={activateClinic} />
            <Text>Clinic Activated</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={profile}
        style={{
          flex: 1,
          width: '100%',
          height: '55%',
        }}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={styles.mainView}>
            <View style={styles.iconView}>
              <TouchableOpacity
                style={styles.icon}
                activeOpacity={0.6}
                onPress={() => navigation.goBack()}>
                <View>
                  <IonIcons name="chevron-back-outline" size={30} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Edit')}
                activeOpacity={0.6}
                style={[
                  styles.icon,
                  {
                    paddingHorizontal: 13,
                  },
                ]}>
                <Icons name={edit} iconHeight={30} fill="#000" />
              </TouchableOpacity>
            </View>
            <View style={styles.profileSection}>
              <View style={styles.viewContainer}>
                <Text
                  style={{
                    fontSize: 18,
                    fontFamily: Typography.FONT_FAMILY_BOLD,
                  }}>
                  Jhon Smith
                </Text>
                <View style={styles.balanceSection}>
                  <View>
                    <View style={styles.firstSection}>
                      <IonIcons name="call" color="#E4BC2D" />
                      <Text style={{marginLeft: 5}}>03325225456</Text>
                    </View>
                    <View style={styles.firstSection}>
                      <IonIcons name="mail" color="#E4BC2D" />
                      <Text style={{marginLeft: 5}}>johndoe@gmail.com</Text>
                    </View>
                  </View>
                  <View>
                    <Text>Balance</Text>
                    <Text style={styles.balance}>S22</Text>
                  </View>
                </View>
              </View>
              <View style={styles.viewContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icons name={description} iconHeight={20} />
                  <Text
                    style={{
                      fontFamily: Typography.FONT_FAMILY_BOLD,
                      fontSize: 18,
                      marginLeft: 5,
                    }}>
                    Brief Medical History
                  </Text>
                </View>
                <Text style={{marginTop: 5}}>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua. At vero eos et accusam et
                  justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                  sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                  ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor invidunt ut labore et dolore
                </Text>
              </View>
              <Section
                icon={<Icons name={notification} iconHeight={60} />}
                title="Notifications"
                onPress={() => navigation.navigate('Notification')}
              />
              <Section
                icon={<Icons name={privacy} iconHeight={60} />}
                title="Pivacy Policy"
              />
              <Section
                icon={<Icons name={language} iconHeight={60} />}
                title="Language"
                onPress={() => navigation.navigate('Language')}
              />
              <Section
                icon={<Icons name={payment} iconHeight={60} />}
                title="Payment"
                onPress={() => navigation.navigate('Payment')}
              />
              <Section
                icon={<Icons name={instantSignIn} iconHeight={60} />}
                title="Instant Sign in"
                onPress={() => navigation.navigate('InstantSignIn')}
              />
              <Section
                icon={<Icons name={childAccount} iconHeight={60} />}
                title="Associate Child's Account"
                onPress={() => navigation.navigate('ChildAccount')}
              />
              <Section
                icon={<Icons name={rate} iconHeight={60} />}
                title="Rate Us!"
              />
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
                  buttonStyles={styles.button}
                  onPress={() => setclinic(true)}>
                  Activate
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <ClinicModal />
      <ActiveClinicModal />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: '90%',
    borderRadius: 20,
  },
  input: {
    backgroundColor: '#EFF3FE',
    borderRadius: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 300,
  },
  icon: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 3,
  },
  profileSection: {
    backgroundColor: '#BFF5FE',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    width: '100%',
    zIndex: 999,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  viewContainer: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  firstSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  balanceSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balance: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 26,
    color: '#282F4B',
  },
  button: {
    backgroundColor: '#282F4B',
    borderRadius: 10,
    marginTop: 15,
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 6,
  },
  mainView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});
