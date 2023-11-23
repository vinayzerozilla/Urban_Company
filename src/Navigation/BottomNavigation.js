import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import UC from '../Screens/UC/UC';
import NativeHome from '../Screens/Native/NativeHome';
import ProfileHome from '../Screens/Account/ProfileHome';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  const Home = () => {
    return <Text style={{backgroundColor: '#ffffff', padding: 30}}>Home</Text>;
  };
  // const UC = () => {
  //   return <Text>UC</Text>;
  // };
  const Beauty = () => {
    return <Text>Beauty</Text>;
  };

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: route.name,
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === 'UC') {
            return (
              <Octicons
                name={focused ? 'home' : 'person-fill'}
                size={focused ? 23 : 20}
                color={color}
              />
            );
          } else if (route.name === 'Beauty') {
            return (
              <Octicons
                name={focused ? 'home' : 'person-fill'}
                size={focused ? 23 : 20}
                color={color}
              />
            );
          } else if (route.name === 'Homes') {
            return (
              <Octicons
                name={focused ? 'tools' : 'person-fill'}
                size={focused ? 23 : 20}
                color={color}
              />
            );
          } else if (route.name === 'Native') {
            return (
              <Octicons
                name={focused ? 'home' : 'person-fill'}
                size={focused ? 23 : 20}
                color={color}
              />
            );
          } else if (route.name === 'Account') {
            return (
              <Octicons
                name={focused ? 'home' : 'person-fill'}
                size={focused ? 23 : 20}
                color={color}
              />
            );
          }
        },
      })}>
      <Tab.Screen
        name="UC"
        component={UC}
        options={{
          tabBarLabel: 'UC',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Beauty"
        component={Beauty}
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
