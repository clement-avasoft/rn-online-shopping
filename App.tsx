import React from 'react';

import {Dimensions, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import {store} from './src/store';

import HomeScreen from './src/screens/Home.screen';
import LoginScreen from './src/screens/Login.screen';
import SignupScreen from './src/screens/Signup.screen';

import BagIcon from './src/images/BagIcon.svg';
import Buy from './src/images/Buy.svg';
import HomeIcon from './src/images/HomeIcon.svg';
import TabProfileIcon from './src/images/TabProfileIcon.svg';
import WishlistIcon from './src/images/Wishlist.svg';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

interface MainProps {
  navigation: any;
}

const Main: React.FC<MainProps> = props => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          if (route.name === 'Home') {
            return focused ? (
              <HomeIcon color="#FF8B38" />
            ) : (
              <HomeIcon color="#BFC9DA" />
            );
          }

          if (route.name === 'MyOrders') {
            return focused ? (
              <BagIcon color="#FF8B38" />
            ) : (
              <BagIcon color="#BFC9DA" />
            );
          }

          if (route.name === 'ShoppingCart') {
            return focused ? (
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#FF8B38',
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Buy />
              </View>
            ) : (
              <View
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: '#FF8B38',
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Buy />
              </View>
            );
          }

          if (route.name === 'Wishlists') {
            return focused ? (
              <WishlistIcon color="#FF8B38" />
            ) : (
              <WishlistIcon color="#BFC9DA" />
            );
          }

          if (route.name === 'Profile') {
            return focused ? (
              <TabProfileIcon color="#FF8B38" />
            ) : (
              <TabProfileIcon color="#BFC9DA" />
            );
          }
        },
        tabBarActiveTintColor: '#7F3DFF',
        tabBarInactiveTintColor: '#C6C6C6',
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="MyOrders"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Wishlists"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
