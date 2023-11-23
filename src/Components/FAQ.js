import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import faq from './../assets/staticdata/Faq.json';
import MyStyle from '../styles/MyStyle';
import {Colors} from '../assets/Colors';
const FAQ = () => {
  const [faqdata, setFaqdata] = useState([]);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    setFaqdata(faq);
  }, []);

  const handleShow = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const getIconName = index => {
    return openIndex === index ? 'chevron-up' : 'chevron-down';
  };

  return (
    <View>
      <Text style={[MyStyle.fontMedium, {paddingVertical: 10, fontSize: 16}]}>
        FAQ's
      </Text>
      {faqdata &&
        faqdata.map((values, index) => (
          <View key={values.title}>
            <TouchableOpacity
              onPress={() => handleShow(index)}
              style={[MyStyle.displayrow, {justifyContent: 'space-between'}]}>
              <Text
                style={[
                  MyStyle.fontSemiBold,
                  {
                    fontSize: 16,
                    paddingVertical: 10,
                    paddingRight: '10%',
                    color: Colors.black,
                  },
                ]}>
                {values.title}
              </Text>
              <FontAwesome name={getIconName(index)} size={12} />
            </TouchableOpacity>
            {openIndex === index && <Text>{values.answer}</Text>}
          </View>
        ))}
    </View>
  );
};

export default FAQ;
