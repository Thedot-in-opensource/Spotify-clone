import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './screen/HomeScreen';
import SearchScreen from './screen/SearchScreen';
import LibraryScreen from './screen/LibraryScreen';
import PremiumScreen from './screen/PremiumScreen';

import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();


const App = () => {

  return (
    <NavigationContainer>
         <Tab.Navigator
          activeColor='#FFFFFF'
          inactiveColor='#CAD5E2'
          barStyle={{ backgroundColor: '#242B2E' }}
          labeled={true}
         >
          <Tab.Screen name="Home" component={HomeScreen}    options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <Feather name="home" color={color} size={26} />
                ),}}/>
          <Tab.Screen name="Search" component={SearchScreen} 
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color, size }) => (
              <Feather name="search" color={color} size={26} />
            ),}}
          />
          <Tab.Screen name="Library" component={LibraryScreen} 
          options={{
            tabBarLabel: 'Library',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="library-music" color={color} size={26} />
            ),}}/>
          <Tab.Screen name="Premium" component={PremiumScreen} 
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="spotify" color={color} size={26} />
            ),}}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
