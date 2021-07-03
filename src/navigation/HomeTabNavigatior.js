import React from 'react';
import {View, Text, Platform, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const fullScreenWidth = Dimensions.get('window').width;

const HomeTabNavigator = props => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          width: fullScreenWidth,
          backgroundColor: '#ffffff',
          paddingHorizontal: 10,
          height: 60,
          ...Platform.select({
            ios: {
              paddingTop: 15,
              height: 75,
            },
          }),
        },
        activeTintColor: '#43595e',
      }}>
      <Tab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Fontisto name="search" size={20} color={color} />
              <Text
                style={{
                  color: focused ? '#43595e' : '#8e8e8e',
                  fontSize: focused ? 13.5 : 12,
                  paddingTop: 5,
                }}>
                Explore
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({color, focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesome name="user" size={20} color={color} />
              <Text
                style={{
                  color: focused ? '#43595e' : '#8e8e8e',
                  fontSize: focused ? 13 : 12,
                  paddingTop: 5,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;
