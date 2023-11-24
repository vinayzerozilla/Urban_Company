import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AnimatedText from '../../Components/AnimatedText';
import MyStyle from '../../styles/MyStyle';
import {Colors} from '../../assets/Colors';
const NativeHome = () => {
  const handleSearch = () => {
    navigation.navigate('Search');
  };

  const texts = ["'RO'", "'Smart Lock'", "'Water Purifier'"];
  return (
    <>
      <ScrollView stickyHeaderIndices={[1]}>
        <View>
          <Image
            source={require('./../../assets/images/native_page_image.webp')}
            style={{height: 150, width: '100%'}}
            resizeMode="cover"
          />
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: 10}}>
          <View style={{marginVertical: 5, marginHorizontal: 15}}>
            <TouchableOpacity onPress={handleSearch}>
              <View
                style={{
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  elevation: 1,
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesome6 name="magnifying-glass" color="black" size={25} />
                <Text
                  style={{
                    fontFamily: 'PlusJakartaSans-Regular',

                    paddingLeft: 20,
                  }}>
                  Search For{' '}
                </Text>
                <AnimatedText texts={texts} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            <View style={[MyStyle.displayrow, {gap: 10}]}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '48%',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'gray',
                  padding: 10,
                  borderRadius: 14,
                  backgroundColor: 'lightgray',
                }}>
                <Text
                  style={[MyStyle.fontMedium, {paddingRight: 7, fontSize: 12}]}>
                  Native smart {'\n'} Locks
                </Text>
                <Image
                  source={require('./../../assets/images/native_lock.webp')}
                  style={{
                    width: '20%',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '48%',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'gray',
                  padding: 10,
                  borderRadius: 14,
                  backgroundColor: 'lightgray',
                }}>
                <Text
                  style={[MyStyle.fontMedium, {paddingRight: 7, fontSize: 12}]}>
                  Native Water {'\n'} purifier
                </Text>
                <Image
                  source={require('./../../assets/images/native_lock.webp')}
                  style={{
                    width: '20%',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={MyStyle.margintopwithwhitebackground}>
          <View style={MyStyle.container}>
            <Text
              style={[MyStyle.fontbold, {color: Colors.black, fontSize: 20}]}>
              Featured Products
            </Text>
            <TouchableOpacity>
              <Image
                source={require('./../../assets/images/native_water_purifier.jpg')}
                resizeMode="contain"
                style={{
                  width: '100%',
                  borderRadius: 14,
                  height: 300,
                  marginVertical: 20,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./../../assets/images/native_lockbig.png')}
                resizeMode="contain"
                style={{
                  width: '100%',
                  borderRadius: 14,
                  height: 300,
                  marginVertical: 20,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./../../assets/images/native_water_purifier.jpg')}
                resizeMode="contain"
                style={{
                  width: '100%',
                  borderRadius: 14,
                  height: 300,
                  marginVertical: 20,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('./../../assets/images/native_lockbig.png')}
                resizeMode="contain"
                style={{
                  width: '100%',
                  borderRadius: 14,
                  height: 300,
                  marginVertical: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginVertical: 10, backgroundColor: 'white'}}></View>
      </ScrollView>
    </>
  );
};

export default NativeHome;
