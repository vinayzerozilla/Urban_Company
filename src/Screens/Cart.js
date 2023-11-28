import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import MyStyle from '../styles/MyStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../assets/Colors';
import {Divider} from 'native-base';

const Cart = () => {
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <View style={MyStyle.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 15,
          }}>
          <FontAwesome name="shopping-cart" size={30} color="blue" />
          <Text
            style={{
              paddingLeft: 10,
              color: 'black',
              fontSize: 22,
              fontWeight: '700',
            }}>
            Your Cart
          </Text>
        </View>
        <Divider orientation="horizontal" thickness={1} />
        <ScrollView>
          <View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBlockColor: 'lightgray',
                  paddingVertical: 20,
                  borderStyle: 'dashed',
                  borderBottomWidth: 1,
                }}>
                <View>
                  <Text>Ayurvedic Masssage</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text>1 service </Text>
                    <Entypo
                      name="dot-single"
                      color="black"
                      size={20}
                      style={{paddingVertical: 10}}
                    />
                    <Text>₹849</Text>
                  </View>
                </View>

                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: '75%', width: '20%', borderRadius: 8}}
                />
              </View>
            </View>
            <View style={{paddingTop: 10}}>
              <Text>Abhyangam: Neck to Toe Stress Relief Massage X 1</Text>
              <View
                style={{flexDirection: 'row', gap: 20, paddingVertical: 25}}>
                <TouchableOpacity
                  style={{
                    width: '48%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 10,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}>
                  <Text style={{fontSize: 16}}>Add Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '48%',
                    paddingVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    borderRadius: 14,
                  }}>
                  <Text
                    style={[
                      MyStyle.fontMedium,
                      {color: 'white', fontSize: 16},
                    ]}>
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBlockColor: 'lightgray',
                  paddingVertical: 20,
                  borderStyle: 'dashed',
                  borderBottomWidth: 1,
                }}>
                <View>
                  <Text>Ayurvedic Masssage</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text>1 service </Text>
                    <Entypo
                      name="dot-single"
                      color="black"
                      size={20}
                      style={{paddingVertical: 10}}
                    />
                    <Text>₹849</Text>
                  </View>
                </View>

                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: '75%', width: '20%', borderRadius: 8}}
                />
              </View>
            </View>
            <View style={{paddingVertical: 10}}>
              <Text>Abhyangam: Neck to Toe Stress Relief Massage X 1</Text>
              <View
                style={{flexDirection: 'row', gap: 20, paddingVertical: 25}}>
                <TouchableOpacity
                  style={{
                    width: '48%',
                    paddingVertical: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}>
                  <Text style={{fontSize: 16}}>Add Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '48%',
                    paddingVertical: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    borderRadius: 14,
                  }}>
                  <Text
                    style={[
                      MyStyle.fontMedium,
                      {color: 'white', fontSize: 16},
                    ]}>
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  borderBlockColor: 'lightgray',
                  paddingVertical: 20,
                  borderStyle: 'dashed',
                  borderBottomWidth: 1,
                }}>
                <View>
                  <Text>Ayurvedic Masssage</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <Text>1 service </Text>
                    <Entypo
                      name="dot-single"
                      color="black"
                      size={20}
                      style={{paddingVertical: 10}}
                    />
                    <Text>₹849</Text>
                  </View>
                </View>

                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: '75%', width: '20%', borderRadius: 8}}
                />
              </View>
            </View>
            <View style={{paddingVertical: 10}}>
              <Text>Abhyangam: Neck to Toe Stress Relief Massage X 1</Text>
              <View
                style={{flexDirection: 'row', gap: 20, paddingVertical: 25}}>
                <TouchableOpacity
                  style={{
                    width: '48%',
                    paddingVertical: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: 'gray',
                  }}>
                  <Text style={{fontSize: 16}}>Add Services</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: '48%',
                    paddingVertical: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'blue',
                    borderRadius: 14,
                  }}>
                  <Text
                    style={[
                      MyStyle.fontMedium,
                      {color: 'white', fontSize: 16},
                    ]}>
                    Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Cart;
