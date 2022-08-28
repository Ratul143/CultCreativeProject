import {StyleSheet, View, FlatList, Animated, Dimensions} from 'react-native';

import React, {useEffect} from 'react';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

const windowWidth = Dimensions.get('window').width;

// ================================================================

export default function Shimmer({navigation}) {
  const FadeIn = React.useRef(new Animated.Value(0)).current;

  const startFade = () => {
    Animated.loop(
      Animated.timing(FadeIn, {
        toValue: 0.7,
        duration: 4000,
        useNativeDriver: true,
      }),
    ).start();
  };

  useEffect(() => {
    startFade();
  }, []);
  // =======================================================================

  const _renderItemCategories = value => {
    return (
      <Animated.View
        style={{
          height: ScreenWidth / 5,
          width: ScreenWidth - 24,
          backgroundColor: 'rgba(128, 128, 128,.22)',
          marginBottom: 15,
          borderRadius: 5,
          opacity: FadeIn.interpolate({
            inputRange: [
              0,
              value - 0.1 < 0 ? 0 : value - 0.1,
              value,
              value + 0.1,
              value + 0.2,
              value + 0.3,
              value + 0.4,
              value + 0.5,
            ],
            outputRange: [1, 1, 0.6, 0.2, 0.4, 0.7, 1, 1],
          }),
        }}></Animated.View>
    );
  };
  //   ==========================================================================
  const shimmerData = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const viewFunction = value => {
    return (
      <Animated.View
        style={{
          height: ScreenWidth / 7,
          width: ScreenWidth / 7,
          backgroundColor: 'rgba(128, 128, 128,.22)',
          marginTop: windowWidth / 30,
          marginRight: windowWidth / 40,
          opacity: FadeIn.interpolate({
            inputRange: [
              0,
              value - 0.1,
              value,
              value + 0.1,
              value + 0.2,
              value + 0.3,
              value + 0.4,
              value + 0.5,
            ],
            outputRange: [1, 1, 0.7, 0.2, 0.3, 0.7, 1, 1],
          }),
        }}></Animated.View>
    );
  };
  const line = width => {
    return (
      <View
        style={{
          height: windowWidth / 35,
          width: width,
          backgroundColor: 'rgba(128, 128, 128,.2)',
          borderRadius: 5,
          left: 3,
          marginTop: windowWidth / 45,
          marginBottom: ScreenWidth / 6 === width ? ScreenWidth / 80 : 0,
        }}></View>
    );
  };
  return (
    <View style={{paddingTop: 8, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', left: 12}}>
        <FlatList
          data={shimmerData}
          keyExtractor={(item, index) => 'key' + index}
          listKey={(item, index) => index.toString()}
          numColumns={1}
          renderItem={({index}) => {
            return _renderItemCategories((index % 3) / 10 + 0.1);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoriesImage: {
    width: ScreenWidth / 2 - 20,
    height: 100,
    backgroundColor: '#D4D4D4',
    marginTop: 10,
  },
  children: {
    backgroundColor: 'white',
    width: ScreenWidth / 2 - 20,
    height: 30,
    marginBottom: 20,
  },
  Text: {
    margin: 5,
    width: '80%',
    backgroundColor: '#D4D4D4',
    height: 6,
    borderRadius: 5,
  },
  Text1: {
    margin: 5,
    width: '50%',
    backgroundColor: '#D4D4D4',
    height: 6,
    borderRadius: 5,
  },
});
