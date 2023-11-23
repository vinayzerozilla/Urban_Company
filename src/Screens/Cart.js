import React from 'react';
import {View, Text} from 'react-native';
import BottomPopup from '../Components/BottomPopup';

const Cart = () => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
      {/* <Text style={{fontFamily: 'PlusJakartaSans-Regular'}}>
        This is the cart page
      </Text> */}
      <BottomPopup />
    </View>
  );
};

export default Cart;
