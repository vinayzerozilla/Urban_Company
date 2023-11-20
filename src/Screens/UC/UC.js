import React from 'react';
import {Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import MyStyle from '../../styles/MyStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Badge} from 'react-native-paper';
import {Divider} from 'react-native-paper';
import Services from '../../Components/Services';
import {Carousel} from 'react-native-basic-carousel';

const UC = () => {
  return (
    <>
      {/* <ScrollView stickyHeaderIndices={[2]}> */}
      <ScrollView stickyHeaderIndices={[2]}>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: 'lightblue',
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              height: 50,
              borderBottomWidth: 3,
              borderBlockColor: 'white',
              borderStyle: 'dashed',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <AntDesign
                  name="pluscircle"
                  color="blue"
                  size={20}
                  style={{paddingRight: 10}}
                />
                <Text style={{color: 'blue', fontSize: 20}}>Plus</Text>
              </View>

              <Text>Up to 15% off on all services </Text>
            </View>

            <AntDesign name="right" color="black" size={15} />
          </View>
        </TouchableOpacity>

        <View style={MyStyle.container}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 24}}>
                WIRF+6V4
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text>80 feet Rd-6th Block Koramangala...</Text>
                <AntDesign name="down" color="black" size={13} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  borderWidth: 2,
                  borderColor: 'gray',
                  borderRadius: 999,
                  width: 50,
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                }}>
                <Badge size={25} style={{position: 'absolute', top: -10}}>
                  3
                </Badge>
                <Feather name="shopping-cart" color="black" size={20} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginHorizontal: 15}}>
          <View style={{marginVertical: 25}}>
            <TouchableOpacity>
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
                <Text style={{paddingLeft: 20}}>Search For</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              gap: 20,
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}>
            <Services servicename="Women's Salon, Spa & Laser Clinic" />
            <Services servicename="Men's Salon and Massage" />
            <Services servicename="AC & Appliance Repair" />
            <Services servicename="Cleaning & Pest Control" />
            <Services servicename="Electrician Plumber & Carpenter" />
            <Services servicename="painting and WaterProofing" />
          </View>
          <View style={{marginVertical: 10}}>
            <Text>Buy Products</Text>
            <Image
              source={require('./../../Assets/images/new_launch.png')}
              style={{
                width: '100%',
                height: 120,
                resizeMode: 'contain',
                flex: 0,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UC;
