import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MyStyle from '../../styles/MyStyle';
import {useNavigation} from '@react-navigation/native';

const Search = () => {
  const [searchtext, setSerachText] = useState('');
  const navigation = useNavigation();
  const returnhandle = () => {
    navigation.navigate('BottomNavigation');
  };
  return (
    <View style={MyStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: 'blue',
          borderRadius: 14,
          borderWidth: 1,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={returnhandle}>
          <FontAwesome6 name="arrow-left" color="gray" size={20} />
        </TouchableOpacity>

        <TextInput
          value={searchtext}
          onChangeText={text => setSerachText(text)}
          placeholder="Look for Services"
          autoFocus={true}
          style={{paddingLeft: 10}}></TextInput>
      </View>
      <View style={{paddingVertical: 10}}>
        <Text style={{color: 'black', fontSize: 20}}>Trending Searches</Text>
      </View>
    </View>
  );
};

export default Search;
