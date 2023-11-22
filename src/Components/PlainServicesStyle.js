import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

export const PlainServicesStyleHeading = props => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontFamily: 'PlusJakartaSans-Bold',
          }}>
          {props.heading}
        </Text>

        <TouchableOpacity>
          <Text style={{color: 'blue', fontFamily: 'PlusJakartaSans-Regular'}}>
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontFamily: 'PlusJakartaSans-Regular'}}>
        {props.subtitle}
      </Text>
    </>
  );
};

const PlainServicesStyle = props => {
  return (
    <View style={{padding: 8, height: 160}}>
      <TouchableOpacity>
        <Image
          source={props.image}
          size="cover"
          style={{
            width: 140,
            height: 140,
            borderRadius: 14,
            borderColor: 'gray',
            borderWidth: 1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default PlainServicesStyle;
