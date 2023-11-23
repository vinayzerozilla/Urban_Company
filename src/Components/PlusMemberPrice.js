import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const PlusMemberPrice = () => {
  return (
    <View
      style={{
        borderColor: 'gray',
        padding: 12,
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text style={{color: 'black'}}>6 Months</Text>
        <Text style={{color: 'black'}}>
          ₹199 <Text style={{textDecorationLine: 'line-through'}}>₹699</Text>
        </Text>
      </View>
      <TouchableOpacity>
        <Text
          style={{
            borderColor: 'lightblue',
            borderWidth: 1,
            color: 'blue',
            paddingVertical: 6,
            paddingHorizontal: 12,
            borderRadius: 8,
            fontWeight: '600',
          }}>
          ADD
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PlusMemberPrice;
