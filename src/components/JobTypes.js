import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../constants/styles';

const JobTypes = ({item, filterData, setFilterData, posts}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        let result = [];
        posts.map(child => {
          if (item === child?.jobPriority) {
            result.push(child);
          }
        });
        if (filterData?.status === false) {
          setFilterData({data: result, status: true, filterBy: item});
        } else {
          if (item === filterData?.filterBy) {
            setFilterData({data: [], status: false});
          } else {
            setFilterData({data: result, status: true, filterBy: item});
          }
        }
      }}
      style={{marginHorizontal: 3}}>
      <Text
        style={{
          color:
            filterData?.filterBy === item
              ? Colors.ecomilliPaleLemon
              : Colors.tertiary,
          fontSize: 12,
          paddingHorizontal: 10,
          padding: 5,
          borderRadius: 20,
          borderWidth: 1,
          margin: 5,
          borderColor:
            filterData?.filterBy === item ? Colors.newRed : Colors.tertiary,
          backgroundColor:
            filterData?.filterBy === item
              ? Colors.newRed
              : Colors.ecomilliPaleLemon,
        }}>
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default JobTypes;

const styles = StyleSheet.create({});
