import React from 'react';
import {View, Text, Image} from 'react-native';
import MyStyle from '../styles/MyStyle';
import {TouchableOpacity} from 'react-native';
const ReferAndEarn = () => {
  return (
    <View style={{backgroundColor: 'lightblue'}}>
      <View style={MyStyle.container}>
        <View style={{flexDirection: 'row', gap: 20}}>
          <View style={{width: '73%'}}>
            <Text>Refer and get FREE services</Text>
            <Text>
              Invite your friends to try Urban Company services. they get
              instant ₹100 once they take service.
            </Text>
          </View>
          <Image
            source={require('./../assets/images/gift.jpg')}
            style={{width: '23%', height: '50', borderRadius: 999}}
          />
        </View>
        <View>
          <Text style={{textAlign: 'center'}}>Refer via</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingVertical: 30,
            }}>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={require('./../assets/images/whatsapp.webp')}
                  style={{width: 50, height: 50, borderRadius: 999}}
                />
              </TouchableOpacity>
              <Text>Whatsapp</Text>
            </View>

            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={require('./../assets/images/messenger.webp')}
                  style={{width: 50, height: 50, borderRadius: 999}}
                  resizeMode="center"
                />
              </TouchableOpacity>
              <Text>Messenger</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <TouchableOpacity>
                <Image
                  source={require('./../assets/images/link.webp')}
                  style={{width: 50, height: 50, borderRadius: 999}}
                />
              </TouchableOpacity>
              <Text>Copy Link</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ReferAndEarn;
