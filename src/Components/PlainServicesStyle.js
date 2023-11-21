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
        <Text style={{color: 'black', fontSize: 24}}>{props.heading}</Text>

        <TouchableOpacity>
          <Text style={{color: 'blue'}}>See all</Text>
        </TouchableOpacity>
      </View>
      <Text>{props.subtitle}</Text>
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
