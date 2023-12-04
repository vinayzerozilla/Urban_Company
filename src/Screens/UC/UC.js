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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Badge} from 'react-native-paper';
import Two_row_style_services from '../../Components/Two_row_style_services';
import ProductStyle from '../../Components/ProductStyle';
import {Divider} from 'react-native-paper';
import AnimatedText from '../../Components/AnimatedText';
import VideoScroll from '../../Components/VideoScroll';
import {useNavigation} from '@react-navigation/native';
import Services from '../../Components/Services';
import Women from '../../Services/Women';
import ImageCarousel from '../../Components/ImageCarousel';
import productdetails from './../../assets/staticdata/ProductDetails.json';
import serviceimage from './../../assets/staticdata/serviceimage.json';
import FAQ from '../../Components/FAQ';
import PlainServicesStyle, {
  PlainServicesStyleHeading,
} from '../../Components/PlainServicesStyle';

const UC = () => {
  const texts = ["'Facial'", "'Kitchen Cleaning'", "'AC Service'"];
  const [showStories, setShowStories] = useState(false);
  const [productDetails, setProductDetails] = useState([]);
  useEffect(() => {
    setProductDetails(productdetails);
  }, []);
  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate('Search');
  };
  const handleNative = () => {
    navigation.navigate('BottomNavigation', {screen: 'Native'});
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
  const handlevideo = () => {
    setShowStories(true);
  };
  const background = require('./../../assets/videos/sample.webm');
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
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity onPress={handleLocaion}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 24,
                    fontFamily: 'PlusJakartaSans-Bold',
                  }}>
                  WIRF+6V4
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>80 feet Rd-6th Block Koramangala...</Text>
                  <AntDesign name="down" color="black" size={13} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handlecart}>
                <View
                  style={{
                    borderWidth: 2,
                    borderColor: 'gray',
                    borderRadius: 999,
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                  }}>
                  <Badge size={25} style={{position: 'absolute', top: -10}}>
                    3
                  </Badge>
                  <Feather name="shopping-cart" color="black" size={20} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: 10}}>
          <View
            style={{
              marginVertical: 5,
              marginHorizontal: 15,
              overflow: 'hidden',
            }}>
            <TouchableOpacity onPress={handleSearch}>
              <View
                style={{
                  height: 50,
                  borderColor: 'gray',
                  borderWidth: 1,
                  elevation: 2,
                  shadowOffset: {width: 5, height: 5},
                  padding: 10,
                  flexDirection: 'row',
                  shadowRadius: 8,
                  alignItems: 'center',
                }}>
                <Ionicons
                  name="search"
                  color="gray"
                  size={30}
                  style={{fontWeight: '300'}}
                />
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
          {/* <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content custoncontent={<FAQ />}>
              <Services
                servicename="Women's Salon, Spa & Laser Clinic"
                touch={onOpen}
              />
            </Actionsheet.Content>
          </Actionsheet> */}
          <Services
            servicename="Women's Salon, Spa & Laser Clinic"
            customcontent={<Women />}
          />
          <Services
            servicename="Men's Salon and Massage"
            customcontent={<Women />}
          />
          <Services
            servicename="AC & Appliance Repair"
            customcontent={<Women />}
          />
          <Services
            servicename="Cleaning & Pest Control"
            customcontent={<Women />}
          />
          <Services
            servicename="Electrician Plumber & Carpenter"
            customcontent={<Women />}
          />
          <Services
            servicename="painting and WaterProofing"
            customcontent={<Women />}
          />
        </View>
        <View style={{paddingVertical: 10, backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            <Text>Buy Products</Text>
            <TouchableOpacity onPress={handleNative}>
              <Image
                source={require('./../../assets/images/new_launch.webp')}
                style={{
                  width: '100%',
                  height: 120,
                  resizeMode: 'contain',
                  flex: 0,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginTop: 10}}>
          <View style={[MyStyle.container]}>
            <Text
              style={{
                color: 'blue',
                fontSize: 24,
                fontFamily: 'PlusJakartaSans-Bold',
              }}>
              Thoughtful curations
            </Text>
            <Text
              style={{
                fontFamily: 'PlusJakartaSans-Regular',
                color: 'black',
                fontSize: 22,
              }}>
              Of our{' '}
              <Text style={{fontFamily: 'Pacifico', fontWeight: '400'}}>
                finest
              </Text>{' '}
              experience
            </Text>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{marginVertical: 20}}>
              <VideoScroll video={background} press={handlevideo} />
              <VideoScroll video={background} press={handlevideo} />
              <VideoScroll video={background} press={handlevideo} />
              <VideoScroll video={background} press={handlevideo} />
              <VideoScroll video={background} press={handlevideo} />
              <VideoScroll video={background} press={handlevideo} />
            </ScrollView>
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
        <View
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
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
              </View>
              <View>
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
                <Two_row_style_services
                  image={require('./../../assets/images/water_purifier.jpeg')}
                  sername="Native Water purifier"
                />
              </View>
            </ScrollView>
          </View>
        </View>
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
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="Salon For Women" />
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
        </View>
        <View style={{backgroundColor: 'white'}}>
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
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading
              heading="Spa For Women"
              subtitle="Refresh, Rewind, Rejuvenate"
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
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="Cleaning and Pest Control" />
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
        </View>
        <View style={{backgroundColor: 'white'}}>
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
        </View>
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
          </View>
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="AC & appliances repair" />
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
        </View>
        <View style={{backgroundColor: 'white'}}>
          <View style={MyStyle.container}>
            <TouchableOpacity onPress={handleNative}>
              <Image
                source={require('./../../assets/images/native_water_purifier.jpg')}
                size="contain"
                style={{
                  width: '100%',
                  height: 400,
                  borderRadius: 14,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading
              heading="Salon For Kids & men"
              subtitle="Grooming essential"
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
        </View>
        <View style={{backgroundColor: 'white', paddingVertical: 5}}>
          <View style={MyStyle.container}>
            <PlainServicesStyleHeading heading="Massage for Men" />
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={{paddingTop: 13}}>
              <PlainServicesStyle
                image={require('./../../assets/images/massage.webp')}
              />
              <PlainServicesStyle
                image={require('./../../assets/images/massage.webp')}
              />
              <PlainServicesStyle
                image={require('./../../assets/images/massage.webp')}
              />
              <PlainServicesStyle
                image={require('./../../assets/images/massage.webp')}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{backgroundColor: 'white', marginTop: 5}}>
          <View style={MyStyle.container}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
              onPress={handleReferAndEarn}>
              <View>
                <Text
                  style={{
                    fontFamily: 'PlusJakartaSans-bold',
                    color: 'black',
                    fontSize: 18,
                  }}>
                  Refer and get {'\n'}
                  free services
                </Text>
                <Text>invite and get ₹ 100*</Text>
              </View>
              <Image
                source={require('./../../assets/images/gift.jpg')}
                size="cover"
                style={{
                  width: 200,
                  height: 100,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default UC;
