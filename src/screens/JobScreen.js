import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import JobList from '../components/JobList';
import Shimmer from '../components/shimmer';
import JobTypes from '../components/JobTypes';

const JobScreen = () => {
  const [posts, setPosts] = useState({status: 'apiCalling'});
  const [number, setNumber] = useState(1);
  const [filterData, setFilterData] = useState({status: false, data: []});
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

  const dupicate = () => {
    let result = {};
    posts?.map(item => {
      if (result[item?.jobPriority] === undefined) {
        result[`${item?.jobPriority}`] = 1;
      }
    });

    let final = Object.keys(result);

    return final;
  };

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.01)'}}>
      {posts?.status === 'apiCalling' ? (
        <Shimmer />
      ) : (
        <>
          <View style={styles.typesContainer}>
            {dupicate(posts)?.map((item, index) => (
              <JobTypes
                key={index}
                item={item}
                filterData={filterData}
                setFilterData={setFilterData}
                posts={posts}
              />
            ))}
          </View>

          <FlatList
            data={filterData?.status ? filterData.data : posts}
            style={{flex: 1}}
            renderItem={renderItem}
            onEndReached={() => setNumber(number + 1)}
            keyExtractor={(item, index) => index}
          />
        </>
      )}
    </View>
  );
};

export default JobScreen;

const styles = StyleSheet.create({
  typesContainer: {
    flexDirection: 'row',
    paddingTop: 5,
    marginLeft: 5,
  },
});
