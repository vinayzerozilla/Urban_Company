import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import MyStyle from '../styles/MyStyle';
const Women = () => {
  return (
    <View style={MyStyle.container}>
      <View>
        <Text
          style={{
            color: 'black',
            fontSize: 22,
            fontWeight: 'bold',
            paddingVertical: 20,
          }}>
          Women's Salon, Spa & Laser Clinic
        </Text>
        <View>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
            Salon & Spa
          </Text>
          <View
            style={{
              flexDirection: 'row',

              flexWrap: 'wrap',
            }}>
            <View style={{width: '25%'}}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: 80, width: 80}}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Salon For Women
              </Text>
            </View>

            <View style={{width: '25%'}}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: 80, width: 80}}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Spa For Women
              </Text>
            </View>

            <View style={{width: '25%'}}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: 80, width: 80}}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Hair Studio for Women
              </Text>
            </View>

            <View style={{width: '25%'}}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: 80, width: 80}}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Nail Studio for women
              </Text>
            </View>

            <View style={{width: '25%'}}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: 80, width: 80}}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                makeup & styling studio
              </Text>
            </View>
          </View>
        </View>
        <View style={{paddingVertical: 30}}>
          <Text style={{color: 'black', fontSize: 20, fontWeight: '500'}}>
            Laser Clinic
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <View style={{width: '25%'}}>
              <TouchableOpacity style={{justifyContent: 'center'}}>
                <Image
                  source={require('./../assets/images/dummy.jpg')}
                  style={{height: 80, width: 80}}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text style={{textAlign: 'center', color: 'black'}}>
                Laser Hair reduction
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Women;
