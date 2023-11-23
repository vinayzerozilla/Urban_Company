import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import GetLocation from 'react-native-get-location';
import MyStyle from './../styles/MyStyle';
const Location = () => {
  const [searchtext, setSerachText] = useState('');
  const [liveLocation, setLiveLocation] = useState();
  const navigation = useNavigation();
  const returnhandle = () => {
    navigation.navigate('BottomNavigation');
  };
  const getLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location);
        setLiveLocation(location);
        console.log(location);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };
  return (
    <View style={MyStyle.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderColor: 'gray',
          borderRadius: 6,
          borderWidth: 1,
          paddingHorizontal: 10,
        }}>
        <TouchableOpacity onPress={returnhandle}>
          <FontAwesome6 name="arrow-left" color="gray" size={20} />
        </TouchableOpacity>

        <TextInput
          value={searchtext}
          onChangeText={text => setSerachText(text)}
          placeholder="Enter Your Location"
          style={{paddingLeft: 10}}></TextInput>
      </View>
      <TouchableOpacity onPress={getLocation}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingVertical: 20,
          }}>
          <FontAwesome6 name="location-crosshairs" size={20} color="blue" />
          <Text style={{color: 'blue', paddingLeft: 10}}>
            Use Current Location
          </Text>
        </View>
      </TouchableOpacity>

      <View>
        {liveLocation && (
          <View>
            <Text>latitude: {liveLocation.latitude}</Text>
            <Text>latitude: {liveLocation.longitude}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default Location;
