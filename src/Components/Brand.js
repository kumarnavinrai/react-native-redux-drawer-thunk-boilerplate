import React from 'react';
import PropTypes from 'prop-types';
import {View, Image} from 'react-native';
import {useTheme} from '@/Hooks';

const Brand = ({height, width, mode}) => {
  const {Layout, Images} = useTheme();

  return (
    <View
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Image
          style={Layout.fullSize}
          source={{
            uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/logo.png',
          }}
          resizeMode={mode}
        />
      </View>

      <Image
        style={Layout.fullSize}
        source={{
          uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/fingerprint_scanner.png',
        }}
        resizeMode={mode}
      />
      <Image
        style={Layout.fullSize}
        source={{
          uri: 'https://fingerscanimages.s3.ap-south-1.amazonaws.com/splashmain.png',
        }}
        resizeMode={mode}
      />
    </View>
  );
};

Brand.propTypes = {
  height: PropTypes.number,
  mode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'repeat', 'center']),
  width: PropTypes.number,
};

Brand.defaultProps = {
  height: 200,
  mode: 'contain',
  width: 200,
};

export default Brand;
