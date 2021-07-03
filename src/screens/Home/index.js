import React from 'react';
import {
  View,
  Text,
  Pressable,
  StatusBar,
  ScrollView,
  FlatList,
} from 'react-native';

import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import data from '../../../assets/data';
import {useNavigation} from '@react-navigation/native';
import Featured from '../../components/Featured';

const HomeScreen = props => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar backgroundColor="#43595e" barStyle="dark-content" />
      <Pressable
        style={styles.searchButton}
        onPress={() => navigation.navigate('Search')}>
        <Fontisto name="search" size={20} color={'#43595e'} />
        <Text style={styles.searchButtonText}> Search Courses</Text>
      </Pressable>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.experiance}>
            <Text style={styles.headingText}>Trending</Text>
            <FlatList
              data={data}
              renderItem={({item, index}) =>
                item.Trending['Data Science'].map(objects => (
                  <Featured experiances={objects} />
                ))
              }
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={styles.experiance}>
            <Text style={styles.headingText}>Top Rated</Text>
            <FlatList
              data={data}
              renderItem={({item, index}) =>
                item['Top Rated']['Business Management'].map(objects => (
                  <Featured experiances={objects} />
                ))
              }
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
