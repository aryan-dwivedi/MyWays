import React, {useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../components/Context';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import RootStackScreen from '../navigation/RootStackScreen';
import HomeTabNavigator from './HomeTabNavigatior';
import Search from '../screens/Search'

const Stack = createStackNavigator();

const Navigator = props => {
  const [isLoading, setIsLoading] = React.useState(true);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async foundUser => {
        setIsLoading(false);
        const userToken = String(foundUser[0].userToken);
        const userName = foundUser[0].username;

        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        setIsLoading(true);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        setIsLoading(false);
      }
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }

      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
     <ActivityIndicator />
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Stack.Navigator>
            <Stack.Screen
              name={'Home'}
              component={HomeTabNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name={'Search'}
              component={Search}
              options={{
                title: 'Search Course',
                headerBackTitle: '',
                headerTruncatedBackTitle: '',
                headerBackImage: () => (
                  <View>
                    <MaterialIcons
                      name="keyboard-backspace"
                      size={30}
                      style={{marginLeft: 10}}
                      color={'#282C35'}
                    />
                  </View>
                ),
              }}
            />
          </Stack.Navigator>
        ) : (
          <RootStackScreen />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigator;
