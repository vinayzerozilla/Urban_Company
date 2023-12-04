import React from 'react';
import {Text, View, Animated, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
import Cart from '../Screens/Cart';
import Location from '../Screens/Location';
import PlusMember from '../Screens/PlusMember';
import ReferAndEarn from '../Screens/ReferAndEarn';
import Search from '../Screens/Search/Search';
import EditProfile from '../Screens/Account/EditProfile';
import {useNavigation} from '@react-navigation/native';
import NativeHome from '../Screens/Native/NativeHome';
import HelpCenter from '../Screens/Account/HelpCenter';
import ManageAddress from '../Screens/Account/ManageAddress';
import BookingPlans from '../Screens/Account/BookingPlans';
import MyStyle from '../styles/MyStyle';
import AboutUC from '../Screens/Account/AboutUC';
import MyRating from '../Screens/Account/MyRating';
import ScheduledBookings from '../Screens/Account/ScheduledBookings';
import MyWallet from '../Screens/Account/MyWallet';
import PaymentOptions from '../Screens/Account/PaymentOptions';
import Settings from '../Screens/Account/Settings';

const Stack = createNativeStackNavigator();

const MyBookings = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('helpcenter')}
      style={{
        borderWidth: 1,
        borderColor: 'lightgray',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 4,
      }}>
      <Text style={[MyStyle.fontMedium, {color: 'blue'}]}>Help</Text>
    </TouchableOpacity>
  );
};

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
        <Stack.Screen
          name="Refer And Earn"
          component={ReferAndEarn}
          options={{
            title: 'Refer & Earn',
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
        <Stack.Screen
          name="MyBookings"
          component={BookingPlans}
          options={{
            title: 'Bookings & Plans',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerRight: () => <MyBookings />,
          }}
        />
        <Stack.Screen
          name="helpcenter"
          component={HelpCenter}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="ManageAddress"
          component={ManageAddress}
          options={{
            title: 'Manage Addresses',
            headerStyle: {
              backgroundColor: 'white',
            },
          }}
        />
        <Stack.Screen
          name="AboutUC"
          component={AboutUC}
          options={{
            title: 'About',
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
        <Stack.Screen
          name="MyRating"
          component={MyRating}
          options={{
            title: '',
          }}
        />
        <Stack.Screen
          name="MyWallet"
          component={MyWallet}
          options={{
            title: 'My Wallet',
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
        <Stack.Screen
          name="ScheduledBookings"
          component={ScheduledBookings}
          options={{
            title: 'Scheduled Bookings',
          }}
        />
        <Stack.Screen
          name="PaymentOptions"
          component={PaymentOptions}
          options={{
            title: 'Manage Payment Methods',
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            title: 'My Profile',
            headerStyle: {
              backgroundColor: 'black',
            },
            navigationOptions: {
              headerLeft: null,
            },
            headerTitleStyle: {
              fontWeight: '500',
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
