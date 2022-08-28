import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import JobList from '../components/JobList';
import Shimmer from '../components/shimmer';

const JobScreen = () => {
  const [posts, setPosts] = useState({status: 'apiCalling'});
  const [number, setNumber] = useState(1);
  const [load, setLoad] = useState(false);

  const fetchPosts = async () => {
    try {
      await firestore()
        .collection('jobs')
        .orderBy('createdAt', 'desc')
        .limitToLast(number * 8)
        .get()
        .then(querySnapshot => {
          let array = [];
          if (number === 1) {
            querySnapshot?._docs?.map(item => {
              array.push(item?._data);
            });
            setPosts([...array]);
          } else {
            querySnapshot?._docs?.map((item, index) => {
              if (index < 8) {
                array.push(item?._data);
              } else {
                array = [...array, item?._data];
              }
            });
            setPosts([...array]);
          }
          setLoad(false);
        });
    } catch (e) {}
  };

  const renderItem = ({item, index}) => <JobList item={item} index={index} />;

  useEffect(() => {
    setLoad(true);
    fetchPosts();
  }, [number]);

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.01)'}}>
      {posts?.status === 'apiCalling' ? (
        <Shimmer />
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          onEndReached={() => setNumber(number + 1)}
          ListFooterComponent={() => {
            if (load && posts?.length !== 10) {
              return (
                <ActivityIndicator
                  size="small"
                  color={'green'}
                  style={{marginBottom: 10}}
                />
              );
            }
          }}
          keyExtractor={(item, index) => index}
        />
      )}
    </View>
  );
};

export default JobScreen;

const styles = StyleSheet.create({});
