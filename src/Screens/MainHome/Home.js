import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import MyStyle from '../../styles/MyStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Two_row_style_services from '../../Components/Two_row_style_services';
import ProductStyle from '../../Components/ProductStyle';
import AnimatedText from '../../Components/AnimatedText';
import {useNavigation} from '@react-navigation/native';
import Services from '../../Components/Services';
import PlainServicesStyle, {
  PlainServicesStyleHeading,
} from '../../Components/PlainServicesStyle';

//data
import productdetails from './../../assets/staticdata/ProductDetails.json';
import serviceimage from './../../assets/staticdata/serviceimage.json';
// import image from './../../assets/images/water_purifier.jpeg';

import Search from '../Search/Search';
import {Colors} from '../../assets/Colors';

const Home = () => {
  const [productDetails, setProductDetails] = useState([]);
  const [serviceImages, setServiceImages] = useState([]);
  useEffect(() => {
    setProductDetails(productdetails);
    setServiceImages(serviceimage);
  }, []);
  const texts = ["'Facial'", "'Kitchen Cleaning'", "'AC Service'"];
  const navigation = useNavigation();
  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handleNative = () => {
    navigation.navigate('NativeHome');
  };
  const handlecart = () => {
    navigation.navigate('Cart');
  };
  const handleLocaion = () => {
    navigation.navigate('Location');
  };
  const handleplusmember = () => {
    navigation.navigate('Plus Member');
  };
  const handleReferAndEarn = () => {
    navigation.navigate('Refer And Earn');
  };
  const background = require('./../../assets/videos/sample.mp4');
  return (
    <>
      <ScrollView stickyHeaderIndices={[2]}>
        <TouchableOpacity onPress={handleplusmember}>
          <View
            style={{
              backgroundColor: 'lightblue',
              padding: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              height: 50,
              borderBottomWidth: 3,
              borderBlockColor: 'white',
              borderStyle: 'dashed',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingHorizontal: 10,
                }}>
                <Image
                  source={require('./../../assets/images/plus_image.webp')}
                />
              </View>

              <Text>Up to 15% off on all services </Text>
            </View>

            <AntDesign name="right" color="black" size={15} />
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons name="mirror" color="gray" size={20} />
              <Text style={{color: Colors.black, fontSize: 20}}>
                <Text style={[MyStyle.fontExtraBold, {color: Colors.gray}]}>
                  Home
                </Text>{' '}
                Services
              </Text>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: 10}}>
          <View style={{marginVertical: 5, marginHorizontal: 15}}>
            <TouchableOpacity onPress={handleSearch}>
              <View
                style={{
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  elevation: 1,
                  padding: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <FontAwesome6 name="magnifying-glass" color="black" size={25} />
                <Text
                  style={{
                    fontFamily: 'PlusJakartaSans-Regular',

                    paddingLeft: 20,
                  }}>
                  Search For{' '}
                </Text>
                <AnimatedText texts={texts} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            gap: 20,
            flexWrap: 'wrap',
            justifyContent: 'center',
            paddingTop: 20,
          }}>
          <Services servicename="AC Service & Repair" />
          <Services servicename="Appliances Repair & Services" />
          <Services servicename="Electrician, Plumber & Carpenters" />
          <Services servicename="Bathroom & Kitchen Cleaning" />
          <Services servicename="Full home cleaning" />
          <Services servicename="Sofa and carpet cleaning" />
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            <View style={[MyStyle.displayrow, {gap: 10}]}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '48%',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'gray',
                  padding: 10,
                  borderRadius: 14,
                  backgroundColor: 'lightgray',
                }}>
                <Text
                  style={[MyStyle.fontMedium, {paddingRight: 7, fontSize: 12}]}>
                  Painting & {'\n'} Waterproofing
                </Text>
                <Image
                  source={require('./../../assets/images/native_lock.webp')}
                  style={{
                    width: '20%',
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '48%',
                  alignItems: 'center',
                  borderWidth: 1,
                  borderColor: 'gray',
                  padding: 10,
                  borderRadius: 14,
                  backgroundColor: 'lightgray',
                }}>
                <Text
                  style={[MyStyle.fontMedium, {paddingRight: 7, fontSize: 12}]}>
                  Pest Control
                </Text>
                <Image
                  source={require('./../../assets/images/native_lock.webp')}
                  style={{
                    width: '20%',
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginTop: 10}}>
          <View style={[MyStyle.container]}>
            <ScrollView horizontal={true} style={{marginVertical: 20}}>
              <TouchableOpacity>
                <Image
                  source={require('./../../assets/images/slider1.webp')}
                  style={{marginHorizontal: 10, borderRadius: 12}}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require('./../../assets/images/slider2.webp')}
                  style={{marginHorizontal: 10, borderRadius: 12}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./../../assets/images/slider3.webp')}
                  style={{marginHorizontal: 10, borderRadius: 12}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./../../assets/images/slider4.webp')}
                  style={{marginHorizontal: 10, borderRadius: 12}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./../../assets/images/slider5.webp')}
                  style={{marginHorizontal: 10, borderRadius: 12}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require('./../../assets/images/slider6.webp')}
                  style={{marginHorizontal: 10, borderRadius: 12}}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        {/* <View style={{backgroundColor: 'white', marginVertical: 10}}>
          <View style={MyStyle.container}>
            <ImageCarousel />
          </View>
        </View> */}
        {/* <View
          style={{
            backgroundColor: 'white',
            marginVertical: 10,
            paddingVertical: 20,
          }}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="New and NoteWorthy" />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/sample.webp')}
                  sername="Laser Hair reduction"
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/sample.webp')}
                  sername="Ayurvedic Spa"
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/sample.webp')}
                  sername="Nail Studio for Women"
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/sample.webp')}
                  sername="Hair Studio For Women"
                />
              </View>
            </ScrollView>
          </View>
        </View> */}
        <View style={{backgroundColor: 'white', marginVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="Most Booked Services" />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {productDetails &&
                productDetails.map(values => {
                  return (
                    <View key={values.id}>
                      <ProductStyle
                        image={require('./../../assets/images/water_purifier.jpeg')}
                        prodname={values.title}
                        ratings={values.ratings}
                        revqty={values.ratingcount}
                        price={values.price}
                      />
                    </View>
                  );
                })}
            </ScrollView>
            <TouchableOpacity>
              <Image
                source={require('./../../assets/images/massage.webp')}
                size="contain"
                style={{
                  width: '100%',
                  height: 400,
                  borderRadius: 14,
                }}
              />
            </TouchableOpacity>
            <View style={{paddingTop: 30}}>
              <PlainServicesStyleHeading heading="AC & Appliances Repair" />
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{paddingTop: 25, marginBottom: -20}}>
                <View>
                  <Two_row_style_services
                    image={require('./../../assets/images/water_purifier.jpeg')}
                  />
                </View>
                <View>
                  <Two_row_style_services
                    image={require('./../../assets/images/water_purifier.jpeg')}
                  />
                </View>
                <View>
                  <Two_row_style_services
                    image={require('./../../assets/images/water_purifier.jpeg')}
                  />
                </View>
                <View>
                  <Two_row_style_services
                    image={require('./../../assets/images/water_purifier.jpeg')}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
        {/* <View style={{backgroundColor: 'white', marginVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="Salon For women" />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingTop: 13}}>
              <View>
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
              <View>
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
              <View>
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
            </ScrollView>
          </View>
        </View> */}
        <View style={{backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            {/* <TouchableOpacity>
              <Image
                source={require('./../../assets/images/massage.webp')}
                size="contain"
                style={{
                  width: '100%',
                  height: 400,
                  borderRadius: 14,
                }}
              />
            </TouchableOpacity> */}
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
          }}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="Cleaning and Pest Control" />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingTop: 25}}>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
            </ScrollView>
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginVertical: 10}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="Quick Home repairs" />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingTop: 20}}>
              {productDetails &&
                productDetails.map(values => {
                  return (
                    <View key={values.id}>
                      <ProductStyle
                        image={require('./../../assets/images/water_purifier.jpeg')}
                        prodname={values.title}
                        ratings={values.ratings}
                        revqty={values.ratingcount}
                        price={values.price}
                      />
                      <ProductStyle
                        image={require('./../../assets/images/water_purifier.jpeg')}
                        prodname={values.title}
                        ratings={values.ratings}
                        revqty={values.ratingcount}
                        price={values.price}
                      />
                    </View>
                  );
                })}
            </ScrollView>
          </View>
        </View>
        {/* <View style={{backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading
              heading="Salon For men"
              subtitle="Grroming essential"
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingTop: 13}}>
              <View>
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
              <View>
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
              <View>
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
                <PlainServicesStyle
                  image={require('./../../assets/images/water_purifier.jpeg')}
                />
              </View>
            </ScrollView>
          </View>
        </View> */}
        {/* <View style={{backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            <TouchableOpacity onPress={handleNative}>
              <Image
                source={require('./../../assets/images/massage.webp')}
                size="contain"
                style={{
                  width: '100%',
                  height: 400,
                  borderRadius: 14,
                }}
              />
            </TouchableOpacity>
          </View>
        </View> */}
        {/* <View style={{backgroundColor: 'white', paddingVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading
              heading="massage for men"
              subtitle="Curated massages by top therapists"
            />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingTop: 13}}>
              <PlainServicesStyle
                image={require('./../../assets/images/water_purifier.jpeg')}
              />
              <PlainServicesStyle
                image={require('./../../assets/images/water_purifier.jpeg')}
              />
              <PlainServicesStyle
                image={require('./../../assets/images/water_purifier.jpeg')}
              />
              <PlainServicesStyle
                image={require('./../../assets/images/water_purifier.jpeg')}
              />
            </ScrollView>
          </View>
        </View> */}
      </ScrollView>
    </>
  );
};

export default Home;
