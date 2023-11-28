import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {Actionsheet, useDisclose} from 'native-base';
const Services = props => {
  const {isOpen, onOpen, onClose} = useDisclose();
  return (
    <View
      style={{
        width: '28%',
      }}>
      <TouchableOpacity onPress={onOpen}>
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
            source={require('./../assets/images/dummyimage.png')}
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
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>{props.customcontent}</Actionsheet.Content>
      </Actionsheet>
    </View>
  );
};

export default Services;
