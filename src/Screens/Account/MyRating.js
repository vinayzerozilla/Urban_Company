import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import MyStyle from '../../styles/MyStyle';

const MyRating = () => {
  return (
    <ScrollView>
      <View style={{backgroundColor: 'lightblue'}}>
        <View style={[MyStyle.container, MyStyle.displayrow]}>
          <Text
            style={[
              MyStyle.fontbold,
              {fontSize: 22, color: 'black', flexWrap: 'wrap'},
            ]}>
            You currently have no {'\n'}ratings
          </Text>
          <Image source={require('./../../assets/images/star.webp')} />
        </View>
      </View>
      <View style={MyStyle.margintopwithwhitebackground}>
        <View style={MyStyle.container}>
          <View style={{paddingVertical: 20}}>
            <Text
              style={[
                MyStyle.fontbold,
                {color: 'black', fontSize: 18, lineHeight: 20},
              ]}>
              Introducing Cutomer Ratings
            </Text>
            <Text style={[MyStyle.medium, {color: 'black', lineHeight: 25}]}>
              Just like you rate UC professionals for the overall quality of the
              service, they also rate you on a scale of 1 to 5. Your aggregate
              rating is caluclated after you have recieved ratings in at least 3
              services
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Text
              style={[
                MyStyle.fontbold,
                {color: 'black', lineHeight: 20, fontSize: 18},
              ]}>
              How Can i be a 5 star customer?
            </Text>
            <Text style={[MyStyle.medium, {color: 'black', lineHeight: 25}]}>
              Did you know that nearly 80% of UC customers are 5-star rated. If
              you also want that coveted rating, here are a few kind gestures.
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Image
              source={require('./../../assets/images/emphathise.webp')}
              style={{marginVertical: 15}}
            />
            <Text
              style={[
                MyStyle.fontbold,
                {color: 'black', fontSize: 18, lineHeight: 20},
              ]}>
              Emphathise
            </Text>
            <Text style={[MyStyle.medium, {color: 'black', lineHeight: 25}]}>
              Show them you care by offering water. it'll help raise their
              spirit and energy levels
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Image
              source={require('./../../assets/images/support.webp')}
              style={{marginVertical: 15}}
            />
            <Text
              style={[
                MyStyle.fontbold,
                {color: 'black', fontSize: 18, lineHeight: 20},
              ]}>
              Support
            </Text>
            <Text style={[MyStyle.medium, {color: 'black', lineHeight: 25}]}>
              Provide access to the washroom (if required); they might have been
              on the go for a while!
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Image
              source={require('./../../assets/images/message.webp')}
              style={{marginVertical: 15}}
            />
            <Text
              style={[
                MyStyle.fontbold,
                {color: 'black', fontSize: 18, lineHeight: 20},
              ]}>
              Respect
            </Text>
            <Text style={[MyStyle.medium, {color: 'black', lineHeight: 25}]}>
              Treat Professionals the way you'd expect to be treated
            </Text>
          </View>
          <View style={{paddingVertical: 20}}>
            <Text
              style={[
                MyStyle.fontbold,
                {color: 'black', fontSize: 18, lineHeight: 20},
              ]}>
              How is Customer rating caluclated?
            </Text>
            <Text style={[MyStyle.medium, {color: 'black', lineHeight: 25}]}>
              Your aggregate rating is a simple average of all the ratings
              you've recieved from UC Professionals in the past.These individual
              ratings are anonymous, and so won't be visible to you or the
              professional.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyRating;
