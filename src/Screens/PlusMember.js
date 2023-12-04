import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MyStyle from '../styles/MyStyle';
import PlusMemberPrice from '../Components/PlusMemberPrice';
import FAQ from '../Components/FAQ';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from './../assets/Colors.js';
const PlusMember = () => {
  const [btnName, setBtnname] = useState('ADD');
  return (
    <>
      <ScrollView>
        <View
          style={{
            justifyContent: 'flex-start',
            backgroundColor: 'white',
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 15,
              }}>
              <Image source={require('./../assets/images/plus_image.webp')} />
            </View>
          </View>
          <View style={MyStyle.container}>
            <Text>One Membership for all benefits</Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                  paddingTop: 20,
                }}>
                <MaterialIcons
                  name="brightness-percent"
                  size={15}
                  color="black"
                />
                <Text style={{paddingLeft: 10, color: 'black'}}>
                  10% off on all catagories
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                <MaterialIcons
                  name="brightness-percent"
                  size={15}
                  color="black"
                />
                <Text style={{paddingLeft: 10, color: 'black'}}>
                  15% off on never tried categories
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 5,
                }}>
                <MaterialIcons name="clock-fast" size={15} color="black" />
                <Text style={{paddingLeft: 10, color: 'black'}}>
                  Express service in 60-90 Min
                </Text>
              </View>
            </View>
            <View>
              <PlusMemberPrice />
              <PlusMemberPrice />
            </View>
          </View>
        </View>
        <View style={{marginTop: 10, backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View>
                <Text style={{color: 'black', fontSize: 16}}>
                  100% money back guarantee
                </Text>
                <Text style={{paddingVertical: 5}}>
                  If you save less than the membership price,{'\n'} we refund
                  you the difference!
                </Text>
              </View>

              <Image source={require('./../assets/images/badge_image.webp')} />
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginTop: 10}}>
          <View style={MyStyle.container}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text style={{color: 'black'}}>Estimated Savings</Text>
                <Text style={{color: 'brown', fontSize: 30, fontWeight: '700'}}>
                  ₹1440
                </Text>
              </View>
              <Image source={require('./../assets/images/coins_image.webp')} />
            </View>
            <View>
              <Text style={{color: 'black'}}>No. of services / year</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={MyStyle.numberstyle}>
                  <Text>1</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyStyle.numberstyle}>
                  <Text>2</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyStyle.numberstyle}>
                  <Text>3</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyStyle.numberstyle}>
                  <Text>4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyStyle.numberstyle}>
                  <Text>5</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyStyle.numberstyle}>
                  <Text>6</Text>
                </TouchableOpacity>
              </View>
              <View style={[MyStyle.displayrow, {paddingVertical: 10}]}>
                <Image source={require('./../assets/images/bookings.webp')} />
                <Text style={[MyStyle.fontMedium]}>
                  subscribers placed 6 orders on average in your {'\n'} area
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={[MyStyle.margintopwithwhitebackground, {paddingVertical: 20}]}>
          <View style={MyStyle.container}>
            <Text style={[MyStyle.fontMedium, {color: Colors.black}]}>
              Plus in numbers
            </Text>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 20,
                paddingTop: 20,
              }}>
              <View
                style={[
                  MyStyle.plusinnumbers,
                  {backgroundColor: 'rgb(237, 247, 242)'},
                ]}>
                <Image source={require('./../assets/images/saved.webp')} />
                <View style={{paddingTop: '30%'}}>
                  <Text
                    style={[
                      MyStyle.fontMedium,
                      {color: Colors.black, paddingBottom: 10},
                    ]}>
                    ₹64 crores
                  </Text>
                  <Text>Saved by Plus Members</Text>
                </View>
              </View>
              <View
                style={[
                  MyStyle.plusinnumbers,
                  {backgroundColor: 'rgb(242, 240, 255)'},
                ]}>
                <Image
                  source={require('./../assets/images/plus_members.webp')}
                />
                <View style={{paddingTop: '30%'}}>
                  <Text
                    style={[
                      MyStyle.fontMedium,
                      {color: Colors.black, paddingBottom: 10},
                    ]}>
                    9.5 lakh+
                  </Text>
                  <Text>Happy Plus Members</Text>
                </View>
              </View>
              <View
                style={[
                  MyStyle.plusinnumbers,
                  {backgroundColor: 'rgb(255, 247, 214)'},
                ]}>
                <Image
                  source={require('./../assets/images/plus_members.webp')}
                />
                <View style={{paddingTop: '30%'}}>
                  <Text
                    style={[
                      MyStyle.fontMedium,
                      {color: Colors.black, paddingBottom: 10},
                    ]}>
                    4.84
                  </Text>
                  <Text>Average rating of Plus Professionals</Text>
                </View>
              </View>
              <View
                style={[
                  MyStyle.plusinnumbers,
                  {backgroundColor: 'rgb(253, 243, 242)'},
                ]}>
                <Image source={require('./../assets/images/rating.webp')} />
                <View style={{paddingTop: '30%'}}>
                  <Text
                    style={[
                      MyStyle.fontMedium,
                      {color: Colors.black, paddingBottom: 10},
                    ]}>
                    6.3
                  </Text>
                  <Text>Average bookings per member</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={MyStyle.margintopwithwhitebackground}>
          <View style={MyStyle.container}>
            <FAQ />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default PlusMember;
