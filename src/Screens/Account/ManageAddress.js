import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MyStyle from '../../styles/MyStyle';
import {useDisclose, Actionsheet} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ManageAddress = () => {
  const {isOpen, onOpen, onClose} = useDisclose();
  const [search, setSearch] = useState('');
  return (
    <>
      <SafeAreaView style={MyStyle.container}>
        <TouchableOpacity onPress={onOpen}>
          <View
            style={[
              MyStyle.displayrow,
              {
                justifyContent: 'flex-start',
                color: 'blue',
                alignItems: 'center',
                borderBottomColor: 'lightgray',
                borderBottomWidth: 1,
                paddingBottom: 15,
              },
            ]}>
            <FontAwesome
              name="plus"
              size={20}
              style={{paddingRight: 20, color: 'blue'}}
            />
            <Text style={[MyStyle.fontbold, {color: 'blue'}]}>
              Add another address
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
      <Actionsheet
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        styles={{body: {height: '100%'}}}>
        <Actionsheet.Content>
          <View>
            <View style={{backgroundColor: 'white', paddingVertical: 10}}>
              <View
                style={{
                  marginVertical: 5,
                  marginHorizontal: 15,
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    borderColor: 'gray',
                    borderWidth: 1,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    shadowRadius: 8,
                    alignItems: 'center',
                    width: '100%',
                  }}>
                  <Ionicons
                    name="search"
                    color="gray"
                    size={30}
                    style={{fontWeight: '300'}}
                  />
                  <TextInput
                    value={search}
                    onChangeText={search => {
                      setSearch(search);
                    }}
                    style={{fontSize: 16}}
                    placeholder="Search for your location/Society/apartment"
                  />
                </View>
                <TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingVertical: 10,
                    }}>
                    <FontAwesome6
                      name="location-crosshairs"
                      size={20}
                      color="blue"
                      style={{paddingRight: 10}}
                    />
                    <Text
                      style={[
                        MyStyle.fontMedium,
                        {fontSize: 16, color: 'blue'},
                      ]}>
                      Use Current Location
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={{height: '100%'}}></View>
            </View>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  );
};

export default ManageAddress;
