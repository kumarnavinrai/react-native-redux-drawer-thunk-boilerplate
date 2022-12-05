import React, {useState} from 'react';
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  ActivityIndicator,
  View,
} from 'react-native';

import Video from 'react-native-video';
const MyVideo = ({style, sourceObj, onPress, paused}) => {
  const [imageError, setImageError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <TouchableOpacity
      onPress={() => {
        if (imageError || !sourceObj) {
        } else {
          onPress();
        }
      }}>
      <View style={{backgroundColor: '#efefef'}}>
        {imageError || !sourceObj ? (
          <Image
            source={require('../assets/images/profile_bg/profile_bg3x.png')}
            style={style}
            onLoadEnd={() => setLoading(false)}
          />
        ) : (
          // <Image
          //   style={style}
          //   source={{uri: sourceObj}}
          //   onError={(e) => {
          //     setLoading(false);
          //     setImageError(true);
          //   }}
          //   onLoadEnd={() => setLoading(false)}
          // />
          <Video
            source={{uri: sourceObj.video_path}} // Can be a URL or a local file.
            ref={(ref) => {
              this.player = ref;
            }} // Store reference
            // onBuffer={this.onBuffer} // Callback when remote video is buffering
            // onError={this.videoError} // Callback when video cannot be loaded
            style={style}
            muted
            // posterResizeMode={'cover'}
            resizeMode={'cover'}
            repeat
            paused={paused}
          />
        )}
      </View>
      {/* {loading && (
        <ActivityIndicator
          style={styles.activityIndicator}
          animating={loading}
        />
      )} */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

export default MyVideo;
