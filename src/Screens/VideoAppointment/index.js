import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  camera,
  more,
  mute,
  participent,
  share,
  speaker,
  videoCamera,
} from '../../Assets/Icons';
import {video} from '../../Assets/images';
import {Button, Icons} from '../../Common';

const VideoAppointement = () => {
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={video}
          style={styles.image}
          imageStyle={{
            flex: 1,
          }}
          resizeMode="cover">
          <View style={styles.main}>
            <LinearGradient colors={['rgba(0,0,0,0.4)', 'rgba(0,0,0,0)']}>
              <View style={styles.upperView}>
                <View style={{flexDirection: 'row'}}>
                  <View style={styles.icon}>
                    <Icons name={camera} iconHeight={30} />
                  </View>
                  <View style={styles.icon}>
                    <Icons name={speaker} iconHeight={30} />
                  </View>
                </View>
                <Button buttonStyles={styles.button}>End</Button>
              </View>
            </LinearGradient>

            <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.3)']}>
              <View style={styles.bottomView}>
                <View style={styles.textView}>
                  <Text numberOfLines={5} style={styles.text}>
                    Lorem ipsum dolor sit amet,sasata consetetur vwasa
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo
                  </Text>
                </View>
                <View style={styles.mainIconView}>
                  <View style={styles.iconView}>
                    <Icons name={mute} iconHeight={30} />
                    <Text style={{color: '#fff', textAlign: 'center'}}>
                      Mute
                    </Text>
                  </View>
                  <View style={styles.iconView}>
                    <Icons name={videoCamera} iconHeight={30} />
                    <Text style={{color: '#fff', textAlign: 'center'}}>
                      Stop Video
                    </Text>
                  </View>
                  <View style={styles.iconView}>
                    <Icons name={share} iconHeight={30} />
                    <Text style={{color: '#fff', textAlign: 'center'}}>
                      Share
                    </Text>
                  </View>
                  <View style={styles.iconView}>
                    <Icons name={participent} iconHeight={30} />
                    <Text style={{color: '#fff', textAlign: 'center'}}>
                      Participents
                    </Text>
                  </View>
                  <View style={styles.iconView}>
                    <Icons name={more} iconHeight={30} />
                    <Text style={{color: '#fff', textAlign: 'center'}}>
                      More
                    </Text>
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default VideoAppointement;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  icon: {
    backgroundColor: 'rgba(31,37,59,0.5)',
    borderRadius: 14,
    padding: 5,
    marginRight: 5,
  },
  button: {
    backgroundColor: '#F33D7B',
    borderRadius: 14,
    paddingVertical: 5,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  upperView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bottomView: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textView: {
    backgroundColor: 'rgba(40,47,75,0.4)',
    borderRadius: 17,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  text: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 22,
  },
  iconView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  mainIconView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
