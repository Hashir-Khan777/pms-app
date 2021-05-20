import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {blood, breakHeart, heartBeat, line, meter} from '../../Assets/Icons';
import {Header, Icons} from '../../Common/index';

const HealthDiary = ({navigation}) => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}>
        <View style={{flex: 1}}>
          <Header
            navigation={navigation}
            heading="Measurements"
            heading2="Brian's"
          />
          <View>
            <Text style={styles.text}>22 December, 2020</Text>
            <View style={styles.heartBeatView}>
              <View style={{alignSelf: 'flex-start', marginBottom: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Icons name={blood} iconHeight={10} />
                  <Text style={{color: '#fff'}}>120/80</Text>
                </View>
                <Text style={{color: '#fff'}}>12 December, 2021</Text>
              </View>
              <Icons name={heartBeat} iconHeight={50} />
            </View>
            <View style={styles.graphContainer}>
              <View style={styles.container1}>
                <View style={styles.mainContainer}>
                  <Icons name={breakHeart} iconHeight={50} />
                  <Text style={styles.mainContainerText}>70</Text>
                </View>
                <Icons
                  name={line}
                  style={{
                    position: 'absolute',
                    top: -3,
                  }}
                  iconHeight={70}
                />
              </View>
              <View style={styles.container2}>
                <View style={styles.mainContainer}>
                  <Icons name={meter} iconHeight={50} />
                  <Text style={styles.mainContainerText}>25</Text>
                </View>
                <Icons
                  name={line}
                  style={{
                    position: 'absolute',
                    top: -3,
                  }}
                  iconHeight={70}
                />
              </View>
            </View>

            <Text style={styles.text}>25 December, 2020</Text>
            <View style={styles.heartBeatView}>
              <View style={{alignSelf: 'flex-start', marginBottom: 5}}>
                <View
                  style={{
                    flexDirection: 'row',
                  }}>
                  <Icons name={blood} iconHeight={10} />
                  <Text style={{color: '#fff'}}>120/80</Text>
                </View>
                <Text style={{color: '#fff'}}>12 December, 2021</Text>
              </View>
              <Icons name={heartBeat} iconHeight={50} />
            </View>
            <View style={styles.graphContainer}>
              <View style={styles.container1}>
                <View style={styles.mainContainer}>
                  <Icons name={breakHeart} iconHeight={50} />
                  <Text style={styles.mainContainerText}>70</Text>
                </View>
                <Icons
                  name={line}
                  style={{
                    position: 'absolute',
                    top: -3,
                  }}
                  iconHeight={70}
                />
              </View>
              <View style={styles.container2}>
                <View style={styles.mainContainer}>
                  <Icons name={meter} iconHeight={50} />
                  <Text style={styles.mainContainerText}>25</Text>
                </View>
                <Icons
                  name={line}
                  style={{
                    position: 'absolute',
                    top: -3,
                  }}
                  iconHeight={70}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('AddHealthManually')}
        style={styles.addButton}>
        <Text style={styles.addText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HealthDiary;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#EFF3FE',
  },
  heartBeatView: {
    backgroundColor: '#4665E1',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  mainContainerText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 5,
  },
  container2: {
    width: '44%',
    backgroundColor: '#8AA14A',
    borderRadius: 20,
    height: 117,
  },
  container1: {
    width: '44%',
    backgroundColor: '#E4BC2D',
    borderRadius: 20,
    height: 117,
  },
  healthDiaryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  graphContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  text: {
    marginVertical: 10,
  },
  addButton: {
    position: 'absolute',
    bottom: 85,
    right: 30,
    backgroundColor: '#4665E1',
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 21,
    elevation: 7,
  },
  addText: {
    fontSize: 35,
    color: '#FFF',
  },
});
