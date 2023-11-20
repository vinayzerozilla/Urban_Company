import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';

const Services = props => {
  return (
    <View
      style={{
        width: '28%',
      }}>
      <TouchableOpacity>
        <View
          style={{
            backgroundColor: '#D3D3D3',
            padding: 15,
            borderRadius: 14,
            height: 100,
          }}>
          <Image
            style={{width: 75, height: 75}}
            source={require('./../Assets/images/dummyimage.png')}
          />
        </View>
        <Text style={{textAlign: 'center', color: 'black'}}>
          {props.servicename}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Services;
