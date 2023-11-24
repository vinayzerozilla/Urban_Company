import React from 'react';
import {Text, View, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Cart from '../Screens/Cart';
import Location from '../Screens/Location';
import PlusMember from '../Screens/PlusMember';
import ReferAndEarn from '../Screens/ReferAndEarn';
import Search from '../Screens/Search/Search';
import EditProfile from '../Screens/Account/EditProfile';
import NativeHome from '../Screens/Native/NativeHome';

const Stack = createNativeStackNavigator();
const scrollY = new Animated.Value(0);
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: 'white'},
        }}>
        <Stack.Screen
          name="BottomNavigation"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Plus Member"
          component={PlusMember}
          options={{
            title: 'UC Plus',
          }}
        />
        <Stack.Screen
          name="NativeHome"
          component={NativeHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            title: 'Edit Profile',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              fontWeight: '500',
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name="Refer And Earn" component={ReferAndEarn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
