import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';

import { COLORS, SIZES, FONTS, icons } from '../constants/index';

const ItemDetail = ({ route, navigation }) => {
  // Render

  const renderHeader = () => {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          marginHorizontal: SIZES.padding,
        }}
      >
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-start',
              justifyContent: 'center',
            }}
            onPress={() => console.warn('Menu on clicked')}
          >
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={{
                tintColor: COLORS.white,
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
            onPress={() => console.warn('Search on clicked')}
          >
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                tintColor: COLORS.white,
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderInfo = () => {
    let { itemInfo } = route.params;
    if (itemInfo) {
      return (
        <ImageBackground
          source={itemInfo.image}
          resizeMode="cover"
          style={{ width: '100%', height: '100%' }}
        >
          {renderHeader()}
        </ImageBackground>
      );
    } else {
      <View></View>;
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor="transparent" />
      {renderInfo()}
    </View>
  );
};

export default ItemDetail;
