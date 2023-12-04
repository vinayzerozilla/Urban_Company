import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking} from 'react-native';
import MyStyle from '../../styles/MyStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Share} from 'react-native';
import {Colors} from '../../assets/Colors';
const ProfileHome = () => {
  const navigation = useNavigation();
  const EditProfile = () => {
    navigation.navigate('EditProfile');
  };
  const helpcenter = () => {
    navigation.navigate('helpcenter');
  };
  const manageaddress = () => {
    navigation.navigate('ManageAddress');
  };
  const mybookings = () => {
    navigation.navigate('MyBookings');
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Please download the ZZ company app here, https://www.google.com/maps',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <ScrollView>
      <View style={{backgroundColor: Colors.white}}>
        <View style={MyStyle.container}>
          <View style={[MyStyle.displayrow, {height: 60}]}>
            <View>
              <Text
                style={{paddingBottom: 10, color: Colors.black, fontSize: 18}}>
                Verified Customer
              </Text>
              <Text>+91 9986344276</Text>
            </View>
            <TouchableOpacity
              onPress={EditProfile}
              style={{
                borderWidth: 1,
                borderColor: 'gray',
                padding: 8,
                borderRadius: 15,
              }}>
              <Entypo name="edit" color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={MyStyle.margintopwithwhitebackground}>
        <View
          style={{
            paddingVertical: 5,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity onPress={helpcenter}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <Entypo name="message" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Help Center
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={MyStyle.margintopwithwhitebackground}>
        <TouchableOpacity>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <MaterialCommunityIcons name="devices" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Devices
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <View
          style={{
            paddingVertical: 5,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity onPress={manageaddress}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome name="map-marker" color="gray" size={20} />
              <Text
                style={{
                  paddingLeft: 12,
                  fontSize: 16,
                  color: Colors.black,
                }}>
                Manage Address
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            paddingVertical: 5,
            borderBottomColor: 'gray',
            borderBottomWidth: 1,
          }}>
          <TouchableOpacity onPress={mybookings}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome name="book" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                My Bookings
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={async () => {
            try {
              await Linking.openURL(
                'market://details?id=com.urbanclap.urbanclap',
              );
            } catch (error) {
              console.error('Failed to open Play Store:', error);
            }
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome5 name="handshake" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Register As Partner
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AboutUC');
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <Entypo name="message" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                About Urban Company
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome name="share-alt" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Share Urban Company
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Refer And Earn');
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <Ionicons name="pricetag" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Refer & Earn
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyRating');
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome name="star" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                My Rating
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('MyWallet');
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome5 name="wallet" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                My Wallet
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ScheduledBookings');
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome5 name="wallet" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Scheduled Booking
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={async () => {
            try {
              await Linking.openURL(
                'market://details?id=com.urbanclap.urbanclap',
              );
            } catch (error) {
              console.error('Failed to open Play Store:', error);
            }
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome5 name="thumbs-up" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Rate Urban Company
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PaymentOptions');
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome name="credit-card" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Payment Options
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <View
            style={{
              paddingVertical: 5,
              borderBottomColor: 'gray',
              borderBottomWidth: 1,
            }}>
            <View
              style={[
                MyStyle.sidebyside,
                {paddingVertical: 10, paddingHorizontal: 15},
              ]}>
              <FontAwesome name="gear" color="gray" size={20} />
              <Text
                style={{paddingLeft: 12, fontSize: 16, color: Colors.black}}>
                Settings
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={MyStyle.container}>
          <View style={{alignItems: 'center', paddingVertical: 20}}>
            <TouchableOpacity style={{paddingBottom: 20}}>
              <Text style={{color: 'red'}}>Logout</Text>
            </TouchableOpacity>
            <Text>7.5.27. R370</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileHome;
