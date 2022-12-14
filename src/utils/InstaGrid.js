import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
var {width} = Dimensions.get('window');
import * as _ from 'lodash';
import MyImage from './MyImage';
import MyVideo from './MyVideo';

const InstaGrid = ({
  data,
  columns,
  onEndReachedThreshold,
  onEndReached,
  loading = false,
  onItemClick,
}) => {
  const groupEveryNthRow = 2;
  const {mainContainer, groupedGridContainer} = styles;
  var currentRow = 0;
  const rowsArray = _.chunk(data, columns);
  var bigImageSide = 'left';

  const renderGroupedItem = (row) => {
    const smallImage1 = row[0];
    const smallImage2 = row[1];
    const largeImage = row[2];

    if (bigImageSide === 'right') {
      bigImageSide = 'left';
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={groupedGridContainer}>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage1}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
                paused={true}
              />
            </View>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage2}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
                paused={true}
              />
            </View>
          </View>
          <View style={styles.gridStyle}>
            <MyVideo
              style={styles.imageThumbnailLarge}
              sourceObj={largeImage}
              onPress={() => {
                onItemClick(largeImage);
              }}
              paused={false}
            />
          </View>
        </View>
      );
    } else {
      bigImageSide = 'right';
      return (
        <View style={{flexDirection: 'row'}}>
          <View style={styles.gridStyle}>
            <MyVideo
              style={styles.imageThumbnailLarge}
              sourceObj={largeImage}
              onPress={() => {
                onItemClick(largeImage);
              }}
              paused={false}
            />
          </View>
          <View style={groupedGridContainer}>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage1}
                onPress={() => {
                  onItemClick(smallImage1);
                }}
                paused={true}
              />
            </View>
            <View style={styles.gridStyle}>
              <MyImage
                style={styles.imageThumbnail}
                sourceObj={smallImage2}
                onPress={() => {
                  onItemClick(smallImage2);
                }}
                paused={true}
              />
            </View>
          </View>
        </View>
      );
    }
  };

  const renderSingleItem = (item) => {
    return (
      <View style={styles.gridStyle}>
        <MyImage
          style={styles.imageThumbnail}
          sourceObj={item}
          onPress={() => {
            onItemClick(item);
          }}
          paused={true}
        />
      </View>
    );
  };

  const renderCell = (row) => {
    if (row.length >= columns && currentRow % groupEveryNthRow === 0) {
      currentRow++;
      return <View>{renderGroupedItem(row)}</View>;
    }
    currentRow++;
    return (
      <View style={{flexDirection: 'row'}}>
        {row.map((item) => {
          return renderSingleItem(item);
        })}
      </View>
    );
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const renderFooter = () => {
    return (
      <View style={{marginBottom: 16}}>
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  return (
    <View style={{height: '92.5%'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={onEndReachedThreshold}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            onEndReached();
          }
        }}>
        <View style={mainContainer}>
          {rowsArray.map((row) => {
            return renderCell(row);
          })}
        </View>
        {loading && renderFooter()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '100%',
    // height: '100%',
    // flex: 1,
  },
  groupedGridContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  imageThumbnail: {
    height: width / 3 - 0.5,
    width: width / 3 - 0.5,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  imageThumbnailLarge: {
    height: width * 0.6 + 26,
    width: width * 0.6 + 26,
    marginLeft: 0,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  gridStyle: {
    margin: 1,
  },
});

export default InstaGrid;
