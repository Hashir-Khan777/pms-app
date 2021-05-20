import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {chat1, chat2, demo} from '../../Assets/images';
import {GiftedChat} from 'react-native-gifted-chat';

const Message = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessages] = useState();

  const onSend = messages =>
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );

  const RenderMessage = props => (
    <View style={{flex: 1, paddingHorizontal: 20}}>
      <View
        style={
          props.currentMessage.user._id === 2
            ? {
                flexDirection: 'row-reverse',
                marginVertical: 10,
              }
            : {
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 10,
              }
        }>
        <Image
          style={{
            borderRadius: 50,
          }}
          source={props.currentMessage.user.avatar}
        />
        <View
          style={[
            props.currentMessage.user._id === 2
              ? {
                  backgroundColor: '#FFF',
                  marginRight: 15,
                }
              : {
                  backgroundColor: '#E4BC2D',
                  marginLeft: 15,
                },
            {
              paddingVertical: 20,
              paddingHorizontal: 15,
              width: '65%',
            },
          ]}>
          <Text
            style={[
              props.currentMessage.user._id === 2
                ? {
                    color: '#2699FB',
                  }
                : {
                    color: '#FFF',
                  },
            ]}>
            {props.currentMessage.text}
          </Text>
          <View
            style={[
              props.currentMessage.user._id === 2
                ? {
                    right: -5,
                    backgroundColor: '#FFF',
                    top: 10,
                  }
                : {
                    left: -5,
                    backgroundColor: '#E4BC2D',
                    top: 20,
                  },
              {
                position: 'absolute',
                width: 20,
                height: 20,
                transform: [{rotate: '45 deg'}],
                zIndex: -999,
              },
            ]}></View>
        </View>
      </View>
    </View>
  );

  const RenderInput = props => (
    <View style={styles.mainRenderInput}>
      <TouchableOpacity>
        <IonIcons name="camera" size={25} color="#E4BC2D" />
      </TouchableOpacity>
      <TextInput
        onChangeText={e => setUserMessages(e)}
        style={{
          flexBasis: '85%',
          marginHorizontal: 5,
        }}
        placeholder="Say Something"
        placeholderTextColor="#BCE0FD"
        value={userMessage}
        keyboardType="default"
      />
      <TouchableOpacity
        onPress={() => {
          props.onSend([
            {
              text: userMessage,
            },
          ]);
          setUserMessages();
        }}>
        <IonIcons
          name="send"
          size={25}
          style={{
            transform: [{rotate: '-45 deg'}],
          }}
        />
      </TouchableOpacity>
    </View>
  );

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur.',
        user: {
          _id: 2,
          name: 'Hashir',
          avatar: chat2,
        },
      },
      {
        _id: 2,
        text:
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.',
        user: {
          _id: 2,
          name: 'Hashir',
          avatar: chat2,
        },
      },
      {
        _id: 3,
        text: 'Sed ut perspiciatis omnis.',
        user: {
          _id: 1,
          name: 'Areeb',
          avatar: chat1,
        },
      },
    ]);
  }, []);

  return (
    <SafeAreaView style={styles.main}>
      <View style={{flex: 1}}>
        <View style={styles.mainView}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}>
            <IonIcons
              name="chevron-back-outline"
              color="#000"
              size={40}
              style={{marginLeft: -10}}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: '#222E54',
              fontSize: 18,
            }}>
            Amit Raj
          </Text>
          <Image source={demo} />
        </View>

        <View style={{flex: 1}}>
          <GiftedChat
            placeholder="Say Something"
            messages={messages}
            onSend={messages => onSend(messages)}
            showUserAvatar
            user={{
              _id: 2,
              name: 'Hashir',
              avatar: chat2,
            }}
            renderMessage={props => <RenderMessage {...props} />}
            alwaysShowSend
            scrollToBottom
            infiniteScroll={false}
            renderSend={props => <RenderSend {...props} />}
            renderInputToolbar={props => <RenderInput {...props} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Message;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EFF3FE',
  },
  mainRenderInput: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  mainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
});
