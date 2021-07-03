import React, {useState} from 'react';
import {SafeAreaView, Text, ImageBackground, View, Pressable, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Featured = props => {
  const experiances = props.experiances;

  const [fav, setfav] = useState(false);

  const addToFavourites = () => {
    setfav(!fav);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <Pressable style={styles.container}>
        <View style={styles.innerContainer}>
          <ImageBackground
            style={styles.image}
            source={{
              uri: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?cs=srgb&dl=pexels-antonio-batini%C4%87-4164418.jpg&fm=jpg',
            }}
          >
          <TouchableOpacity
            style={styles.addToFavourites}
            onPress={() => addToFavourites()}>
            <Ionicons
              name={fav ? 'md-heart' : 'md-heart-outline'}
              size={35}
              color="#ff6347"
            />
          </TouchableOpacity>
          </ImageBackground>
          <View style={{flex: 1, flexDirection: 'column', marginTop: -15}}>
            <Text numberOfLines={1} style={styles.text}>{experiances.Title}</Text>

            <MaterialCommunityIcons name="star" size={20} color={'#FF0000'}>
              <Text style={styles.Rating}>{experiances.rating}</Text>
            </MaterialCommunityIcons>
          </View>
        </View>
      </Pressable>
    </SafeAreaView>
  );
};

export default Featured;
