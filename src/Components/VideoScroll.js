import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const VideoScroll = props => {
  const videoRef = useRef();

  return (
    <View>
      <TouchableOpacity onPress={props.press}>
        <Video
          source={props.video}
          resizeMode="contain"
          repeat={true}
          ref={videoRef}
          style={styles.backgroundVideo}
          muted={true}
        />
      </TouchableOpacity>
    </View>
  );
};

var styles = StyleSheet.create({
  backgroundVideo: {
    width: 130,
    height: 200,
  },
});
export default VideoScroll;
