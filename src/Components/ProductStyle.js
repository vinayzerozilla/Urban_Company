import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ProductStyle = props => {
  return (
    <View style={{width: 120, paddingVertical: 3, height: 200}}>
      <TouchableOpacity>
        <Image
          source={props.image}
          size="cover"
          style={{
            width: 100,
            height: 100,
            alignItems: 'center',
          }}
        />
        <Text style={{color: 'black'}}>{props.prodname}</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Entypo name="star" color="black" size={14} />
          <Text style={{paddingHorizontal: 3}}>{props.ratings}</Text>
          <Text>({props.revqty})</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text>₹{props.price}</Text>
          <Text style={{textDecorationLine: 'line-through', paddingLeft: 3}}>
            {props.strikedprice}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductStyle;
