import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MyStyle from '../../styles/MyStyle';
import {Colors} from '../../assets/Colors';

const MyWallet = () => {
  const navigation = useNavigation();
  const handleReferAndEarn = () => {
    navigation.navigate('Refer And Earn');
  };
  return (
    <>
      <View style={MyStyle.container}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          onPress={handleReferAndEarn}>
          <View>
            <Text
              style={[
                MyStyle.fontExtraBold,
                {
                  color: Colors.black,
                  fontSize: 22,
                },
              ]}>
              Refer Your {'\n'}
              friends and Earn
            </Text>
            <Text>They get ₹100 and you get ₹100</Text>
          </View>
          <Image
            source={require('./../../assets/images/gift.jpg')}
            size="cover"
            style={{
              width: 200,
              height: 100,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: 'white'}}>
        <View style={MyStyle.container}>
          <View style={[MyStyle.displayrow]}>
            <Text
              style={[MyStyle.fontbold, {color: Colors.black, fontSize: 20}]}>
              UC Cash
            </Text>
            <Text
              style={[MyStyle.fontbold, {color: Colors.black, fontSize: 20}]}>
              ₹ 0
            </Text>
          </View>
          <Text style={{paddingVertical: 10}}>
            Formerly UC Credits. Applicable on all services
          </Text>
        </View>
      </View>
      <View style={{backgroundColor: 'white', marginTop: 10}}>
        <View style={MyStyle.container}>
          <View style={[MyStyle.displayrow]}>
            <TouchableOpacity
              style={{
                paddingVertical: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                width: '100%',
              }}>
              <Text>Have a question?</Text>
            </TouchableOpacity>
          </View>
          <View style={[MyStyle.displayrow]}>
            <TouchableOpacity
              style={{
                paddingVertical: 20,
                borderBottomWidth: 1,
                borderBottomColor: 'lightgray',
                width: '100%',
              }}>
              <Text>Wallet Activity</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default MyWallet;
