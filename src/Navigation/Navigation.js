import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Cart from '../Screens/Cart';
import Location from '../Screens/Location';
import PlusMember from '../Screens/PlusMember';
import ReferAndEarn from '../Screens/ReferAndEarn';
import Search from '../Screens/Search/Search';

const Stack = createNativeStackNavigator();
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
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Plus Member" component={PlusMember} />
        <Stack.Screen name="Refer And Earn" component={ReferAndEarn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
