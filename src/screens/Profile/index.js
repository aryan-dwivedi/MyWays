import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  SafeAreaView,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import users from '../../../assets/users';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {AuthContext} from '../../components/Context/index';

const user = users[0];

const Profile = () => {
  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
  const {signOut} = React.useContext(AuthContext)
  return (
    <View>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Image
            style={styles.image}
            source={{
              uri: user.Image,
            }}
          />
          <View>
            <Text style={styles.name}>{user.Name}</Text>
            <Text style={styles.user}>Joined on {user.Joined}</Text>
          </View>
        </SafeAreaView>
        <View style={styles.line}></View>
        <AnimatedTouchable style={styles.options}>
          <MaterialCommunityIcons
            name="account"
            size={25}
            color={'#282C35'}></MaterialCommunityIcons>
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Text style={styles.optionstext}>Account</Text>
        </AnimatedTouchable>

        <View style={styles.line}></View>
        <AnimatedTouchable
          style={styles.options}
          onPress={() => {signOut()}}>
          <MaterialIcons
            name="logout"
            size={25}
            color={'#282C35'}></MaterialIcons>
          <Text>&nbsp;&nbsp;&nbsp;</Text>
          <Text style={styles.optionstext}>Log Out</Text>
        </AnimatedTouchable>
      </ScrollView>
    </View>
  );
};

export default Profile;
