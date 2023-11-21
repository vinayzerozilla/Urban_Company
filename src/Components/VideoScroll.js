import React, {useRef} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Video, {VideoRef} from 'react-native-video';

const VideoScroll = props => {
  const videoRef = useRef();

  return (
    <View>
      <Video
        source={props.video}
        resizeMode="contain"
        repeat={true}
        ref={videoRef}
        style={styles.backgroundVideo}
        muted={true}
      />
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
