import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyStyle from '../../styles/MyStyle';
import {Colors} from '../../assets/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const PaymentOptions = () => {
  return (
    <>
      <View style={MyStyle.container}>
        <Text>
          We Will debit ₹1 to verify a new payment instrument. This will be
          refunded after verification
        </Text>
      </View>
      <View style={MyStyle.margintopwithwhitebackground}>
        <View style={MyStyle.container}>
          <Text style={[MyStyle.fontbold, {fontSize: 18, color: Colors.black}]}>
            Debit or Credit card
          </Text>
          <TouchableOpacity>
            <View
              style={[MyStyle.displayrow, {justifyContent: 'space-between'}]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome
                  name="credit-card"
                  size={20}
                  color="black"
                  style={{paddingRight: 10}}
                />
                <Text>Add a card</Text>
              </View>

              <View style={[MyStyle.displayrow, {paddingVertical: 20}]}>
                <FontAwesome name="chevron-right" size={14} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default PaymentOptions;
