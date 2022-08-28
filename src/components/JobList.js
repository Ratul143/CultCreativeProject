import {View, Text, Image, Platform, StyleSheet} from 'react-native';
import React from 'react';
import ProgressiveImage from './ProgressiveImage';
import {windowWidth} from '../utils/Dimentions';

const JobList = ({item, index}) => {
  //   console.log(item);
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <ProgressiveImage
          defaultImageSource={require('../assets/images/default-img.jpg')}
          source={{uri: item.imageUrl}}
          style={{width: 50, height: 50, borderRadius: 100}}
          resizeMode="cover"
        />
        <View
          style={{
            marginLeft: 15,
            width: windowWidth - (24 / 375) * windowWidth - 30 - 50,
          }}>
          <Text numberOfLines={1} style={styles.title}>
            {item?.title}
          </Text>
          <Text style={{color: 'blue', marginTop: 5}} numberOfLines={1}>
            {item?.companyName}
          </Text>
          <Text style={{color: 'gray'}} numberOfLines={1}>
            {item?.companyLocation}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: 'gray'}} numberOfLines={1}>
              {item?.jobType}
            </Text>
            <View
              style={{
                // width: 2,
                height: 14,
                borderWidth: 0.5,
                borderColor: 'black',
                marginHorizontal: 5,
              }}></View>
            <Text style={{color: 'gray'}} numberOfLines={1}>
              {item?.noOfApplicants}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default JobList;
const styles = StyleSheet.create({
  card: {
    padding: 5,
    marginHorizontal: (12 / 375) * windowWidth,
    marginVertical: 12,
    borderRadius: 4,
    backgroundColor: 'white',
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0,.3)',
        shadowOffset: {height: 3, width: 3},
        shadowOpacity: 0.2,
        shadowRadius: 7,
      },
      android: {
        elevation: 3,
        shadowColor: 'rgba(0,0,0,0.2)',
      },
    }),
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',

    width: windowWidth - (24 / 375) * windowWidth - 30 - 50,
  },
});
