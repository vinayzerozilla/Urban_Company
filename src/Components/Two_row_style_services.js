import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';

const Two_row_style_services = props => {
  return (
    <>
      <View style={{width: 120, paddingVertical: 3, height: 170}}>
        <TouchableOpacity>
          <Image
            source={props.image}
            size="cover"
            style={{
              width: 100,
              height: 100,
            }}
          />
          <Text style={{fontSize: 14, color: 'black', paddingTop: 5}}>
            {props.sername}
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Two_row_style_services;
