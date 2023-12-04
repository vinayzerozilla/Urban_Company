import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const ServiceWOBtmsht = props => {
  const navigation = useNavigation();
  const handlenavigation = () => {
    navigation.navigate(props.navigationpage);
  };
  return (
    <View
      style={{
        width: '28%',
      }}>
      <TouchableOpacity onPress={handlenavigation}>
        <View
          style={{
            backgroundColor: '#D3D3D3',
            padding: 15,
            borderRadius: 14,
            height: 100,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{
              width: 75,
              height: 75,
            }}
            source={require('./../assets/images/men_salon.webp')}
          />
        </View>
        <Text
          style={{
            fontFamily: 'PlusJakartaSans-Regular',
            textAlign: 'center',
            color: 'black',
          }}>
          {props.servicename}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ServiceWOBtmsht;
