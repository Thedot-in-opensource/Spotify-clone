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


const Tab = createMaterialBottomTabNavigator();


const App = () => {

  return (
    <NavigationContainer>
         <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
          <Tab.Screen name="Library" component={LibraryScreen} />
          <Tab.Screen name="Premium" component={PremiumScreen} />
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
