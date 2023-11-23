import {StyleSheet} from 'react-native';
import {Colors} from '../assets/Colors';
const MyStyle = StyleSheet.create({
  container: {
    margin: 15,
  },
  fontbold: {
    fontFamily: 'PlusJakartaSans-Bold',
  },
  fontExtraBold: {
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  fontMedium: {
    fontFamily: 'PlusJakartaSans-Medium',
  },
  fontSemiBold: {
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  displayrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  margintopwithwhitebackground: {
    marginTop: 10,
    backgroundColor: Colors.white,
  },
  //plus member
  numberstyle: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
  },
  plusinnumbers: {
    width: '45%',
    padding: 15,
    borderRadius: 12,
  },
});
export default MyStyle;
