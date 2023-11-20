import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import MyStyle from '../../styles/MyStyle';

const UC = () => {
  return (
    <>
      <TouchableOpacity>
        <View style={{backgroundColor: 'lightblue', padding: 5}}>
          <Text>Working new </Text>
        </View>
      </TouchableOpacity>

      <View style={MyStyle.container}>
        <Text>Working</Text>
      </View>
    </>
  );
};

export default UC;
