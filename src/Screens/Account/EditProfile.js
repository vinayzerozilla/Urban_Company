import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Colors} from './../../assets/Colors.js';
import MyStyle from '../../styles/MyStyle';

const EditProfile = () => {
  const [name, setName] = useState('Verified Customer');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+91 9986344276');
  return (
    <View style={{backgroundColor: Colors.white, flex: 1}}>
      <View style={{margin: 25}}>
        <Text>Full Name</Text>
        <TextInput
          style={{borderBottomColor: 'lightgray', borderBottomWidth: 1}}
          value={name}></TextInput>
        <View style={{paddingTop: 25}}>
          <Text>Email address</Text>
          <TextInput
            style={{borderBottomColor: 'lightgray', borderBottomWidth: 1}}
            value={email}></TextInput>
        </View>
        <View style={{paddingTop: 25}}>
          <Text>Phone Number</Text>
          <TextInput
            style={{borderBottomColor: 'lightgray', borderBottomWidth: 1}}
            value={phone}></TextInput>
        </View>
      </View>
      <View style={{paddingTop: 20, marginHorizontal: 15}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            paddingVertical: 10,
            borderRadius: 5,
          }}>
          <Text
            style={[
              MyStyle.fontMedium,
              {color: Colors.white, textAlign: 'center'},
            ]}>
            Update Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditProfile;
