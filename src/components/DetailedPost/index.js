import React, {useRef} from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  View,
  StatusBar,
  ScrollView,
  Dimensions,
  Pressable,
} from 'react-native';
import styles from './styles';
import FixedBottom from '../FixedBottom';

const DetailedPost = props => {
  const post = props.post;
  const flatlist = useRef();
  const images = post.image;
  const {width} = Dimensions.get('window');
  const height = width * 0.6;
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <View style={styles.container}>
          <ScrollView pagingEnabled horizontal style={{width, height}}>
            {images.map((image, index) => (
              <Image
                key={index}
                style={styles.image}
                source={{
                  uri: image,
                }}
              />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {images.map((i, k) => (
              <Text key={k} style={styles.pagingText}>
                ⬤
              </Text>
            ))}
          </View>
        </View>


        {/*  Description */}
        <View style={styles.details}>
          <Text style={styles.heading}>Description</Text>
          <Text style={styles.descriptiontext}>{post.Description}</Text>
        </View>
        <View style={styles.line}></View>

      </ScrollView>
        <View style={styles.buttonView}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Book now</Text>
          </Pressable>
        </View>
    </SafeAreaView>
  );
};

export default DetailedPost;
