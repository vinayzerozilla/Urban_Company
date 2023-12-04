import React from 'react';
import {View, SafeAreaView, TouchableOpacity, Text} from 'react-native';
import MyStyle from '../../styles/MyStyle';
import {Colors} from '../../assets/Colors';

const AboutUC = () => {
  return (
    <SafeAreaView style={MyStyle.container}>
      <View>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
          }}>
          <Text style={[MyStyle.fontMedium, {color: Colors.black}]}>
            About Urban Company
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
          }}>
          <Text style={[MyStyle.fontMedium, {color: Colors.black}]}>
            Share Urban Company
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
          }}>
          <Text style={[MyStyle.fontMedium, {color: Colors.black}]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
          }}>
          <Text style={[MyStyle.fontMedium, {color: Colors.black}]}>
            Terms and Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AboutUC;
