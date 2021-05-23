import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Header} from '../../Common';
import FlipToggle from 'react-native-flip-toggle-button';

const InstantSignIn = ({navigation}) => {
  const [faceId, setfaceId] = useState(false);
  const [faceId2, setfaceId2] = useState(false);
  const [pin, setpin] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}>
        <View style={{flex: 1}}>
          <Header
            navigation={navigation}
            image={false}
            heading="Sign-in"
            heading2="Instant"
          />
          <View style={styles.container}>
            <Text>Face Id Login</Text>
            <FlipToggle
              value={faceId}
              buttonWidth={58}
              buttonHeight={30}
              buttonRadius={50}
              sliderWidth={22}
              sliderHeight={22}
              sliderRadius={50}
              buttonOnColor="#DCE5FE"
              buttonOffColor="#DCE5FE"
              sliderOnColor="#282F4B"
              sliderOffColor="#282F4B"
              onToggle={newState => setfaceId(newState)}
              onToggleLongPress={newState => setfaceId(newState)}
            />
          </View>
          <View style={styles.container}>
            <Text>Face Id Login</Text>
            <FlipToggle
              value={faceId2}
              buttonWidth={58}
              buttonHeight={30}
              buttonRadius={50}
              sliderWidth={22}
              sliderHeight={22}
              sliderRadius={50}
              buttonOnColor="#DCE5FE"
              buttonOffColor="#DCE5FE"
              sliderOnColor="#FFF"
              sliderOffColor="#FFF"
              onToggle={newState => setfaceId2(newState)}
              onToggleLongPress={newState => setfaceId2(newState)}
            />
          </View>
          <View style={styles.pinLogin}>
            <View style={styles.pinLoginButton}>
              <Text>Pin Login</Text>
              <FlipToggle
                value={pin}
                buttonWidth={58}
                buttonHeight={30}
                buttonRadius={50}
                sliderWidth={22}
                sliderHeight={22}
                sliderRadius={50}
                buttonOnColor="#DCE5FE"
                buttonOffColor="#DCE5FE"
                sliderOnColor="#282F4B"
                sliderOffColor="#282F4B"
                onToggle={newState => setpin(newState)}
                onToggleLongPress={newState => setpin(newState)}
              />
            </View>
            <Text style={{paddingVertical: 10}}>Current Password</Text>
            <TextInput
              placeholder="Current password"
              placeholderTextColor="rgba(0, 0, 0, 0.6)"
              style={styles.input}
            />
            <Text style={{paddingVertical: 10}}>Enter a 5 digit pin</Text>
            <View style={styles.pinContainer}>
              <TextInput style={styles.pin} maxLength={1} />
              <TextInput style={styles.pin} maxLength={1} />
              <TextInput style={styles.pin} maxLength={1} />
              <TextInput style={styles.pin} maxLength={1} />
              <TextInput style={styles.pin} maxLength={1} />
            </View>
            <Text style={{paddingVertical: 10}}>Current Password</Text>
            <View style={styles.pinContainer}>
              <TextInput style={styles.pin} maxLength={1} />
              <TextInput style={styles.pin} maxLength={1} />
              <TextInput style={styles.pin} maxLength={1} />
              <TextInput style={styles.pin} maxLength={1} />
              <TextInput style={styles.pin} maxLength={1} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InstantSignIn;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 10,
  },
  pinLogin: {
    backgroundColor: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginBottom: 10,
  },
  pinLoginButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#EFF3FE',
    borderRadius: 14,
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  pin: {
    width: 40,
    height: 50,
    backgroundColor: '#EFF3FE',
    borderRadius: 14,
    textAlign: 'center',
  },
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
