import React from 'react';
import {Text, View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import UC from '../Screens/UC/UC';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import NativeHome from '../Screens/Native/NativeHome';
import Home from '../Screens/MainHome/Home';
import ProfileHome from '../Screens/Account/ProfileHome';
import BeautyHome from '../Screens/Beauty/BeautyHome';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  // const Home = () => {
  //   return <Text style={{backgroundColor: '#ffffff', padding: 30}}>Home</Text>;
  // };
  // const UC = () => {
  //   return <Text>UC</Text>;
  // };
  // const Beauty = () => {
  //   return <Text>Beauty</Text>;
  // };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: route.name,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'ZZ') {
            return focused ? (
              <Image
                source={require('./../assets/images/uc_logo.png')}
                style={{width: 23, height: 23}}
              />
            ) : (
              <Image
                source={require('./../assets/images/uc_logo.png')}
                style={{width: 20, height: 20}}
              />
            );
          } else if (route.name === 'Beauty') {
            return (
              <MaterialCommunityIcons
                name={focused ? 'mirror' : 'mirror-variant'}
                size={focused ? 23 : 20}
                color={color}
              />
            );
          } else if (route.name === 'Homes') {
            return focused ? (
              <Octicons name="tools" size={23} color={color} />
            ) : (
              <FontAwesome5 name="tools" size={23} color={color} />
            );
          } else if (route.name === 'Native') {
            return (
              <FontAwesome5
                name={focused ? 'box-open' : 'box'}
                size={focused ? 23 : 20}
                color={color}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <FontAwesome
                name={focused ? 'user' : 'user-o'}
                size={focused ? 23 : 20}
                color={color}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name="ZZ"
        component={UC}
        options={{
          tabBarLabel: 'ZZ',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Beauty"
        component={BeautyHome}
        options={{
          tabBarLabel: 'Beauty',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Homes"
        component={Home}
        options={{
          tabBarLabel: 'Homes',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Native"
        component={NativeHome}
        options={{
          tabBarLabel: 'Native',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={ProfileHome}
        options={{
          tabBarLabel: 'Account',
          title: 'My Profile',
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTitleStyle: {
            fontWeight: '500',
            color: 'white',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
