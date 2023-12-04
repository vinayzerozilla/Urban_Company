import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import MyStyle from '../../styles/MyStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../../assets/Colors';

const HelpCenter = () => {
  return (
    <SafeAreaView style={{paddingTop: 40}}>
      <View>
        <Text
          style={[
            MyStyle.fontbold,
            MyStyle.container,
            {fontSize: 22, color: Colors.black},
          ]}>
          How can we help you?
        </Text>
      </View>
      <View style={MyStyle.margintopwithwhitebackground}>
        <View style={MyStyle.container}>
          <View>
            <Text
              style={[MyStyle.fontMedium, {fontSize: 18, color: Colors.black}]}>
              All Topics
            </Text>
          </View>
          <TouchableOpacity>
            <View
              style={[
                MyStyle.displayrow,
                {
                  paddingVertical: 20,
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={MyStyle.displayrow}>
                <FontAwesome
                  name="user-o"
                  size={20}
                  color={Colors.black}
                  style={{marginRight: 15}}
                />
                <Text
                  style={[
                    MyStyle.fontMedium,
                    {fontSize: 15, color: Colors.black},
                  ]}>
                  Account
                </Text>
              </View>
              <AntDesign name="right" size={20} color={Colors.black} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                MyStyle.displayrow,
                {
                  paddingVertical: 20,
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={MyStyle.displayrow}>
                <FontAwesome5
                  name="book-reader"
                  size={20}
                  color={Colors.black}
                  style={{marginRight: 15}}
                />
                <Text
                  style={[
                    MyStyle.fontMedium,
                    {fontSize: 15, color: Colors.black},
                  ]}>
                  Gettting Started with UC
                </Text>
              </View>
              <AntDesign name="right" size={20} color={Colors.black} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                MyStyle.displayrow,
                {
                  paddingVertical: 20,
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={MyStyle.displayrow}>
                <FontAwesome
                  name="credit-card"
                  size={20}
                  color={Colors.black}
                  style={{marginRight: 15}}
                />
                <Text
                  style={[
                    MyStyle.fontMedium,
                    {fontSize: 15, color: Colors.black},
                  ]}>
                  Payments and UC Credits
                </Text>
              </View>
              <AntDesign name="right" size={20} color={Colors.black} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                MyStyle.displayrow,
                {
                  paddingVertical: 20,
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={MyStyle.displayrow}>
                <FontAwesome
                  name="circle-o"
                  size={20}
                  color={Colors.black}
                  style={{marginRight: 15}}
                />
                <Text
                  style={[
                    MyStyle.fontMedium,
                    {fontSize: 15, color: Colors.black},
                  ]}>
                  UC Plus Membership
                </Text>
              </View>
              <AntDesign name="right" size={20} color={Colors.black} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                MyStyle.displayrow,
                {
                  paddingVertical: 20,
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={MyStyle.displayrow}>
                <MaterialIcons
                  name="safety-check"
                  size={25}
                  color={Colors.black}
                  style={{marginRight: 15}}
                />
                <Text
                  style={[
                    MyStyle.fontMedium,
                    {fontSize: 15, color: Colors.black},
                  ]}>
                  UC Safety
                </Text>
              </View>
              <AntDesign name="right" size={20} color={Colors.black} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={[
                MyStyle.displayrow,
                {
                  paddingVertical: 20,
                  borderBottomColor: 'lightgray',
                  borderBottomWidth: 1,
                  justifyContent: 'space-between',
                },
              ]}>
              <View style={MyStyle.displayrow}>
                <FontAwesome
                  name="check-square-o"
                  size={20}
                  color={Colors.black}
                  style={{marginRight: 15}}
                />
                <Text
                  style={[
                    MyStyle.fontMedium,
                    {fontSize: 15, color: Colors.black},
                  ]}>
                  Warranty
                </Text>
              </View>
              <AntDesign name="right" size={20} color={Colors.black} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HelpCenter;
