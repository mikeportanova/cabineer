import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getHeaderTitle} from '@react-navigation/elements';
import HomeScreen from 'screens/Home/HomeScreen';
import type {
  HouseData,
  RootTabParamList,
  RootStackParamList,
  ChecklistsStackParamList,
  HomeStackParamList,
  MainNavStackParamsList,
} from '../types';
import CheckListScreen from 'screens/CheckList/CheckListScreen';

const MainNavStack = createNativeStackNavigator<MainNavStackParamsList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const ChecklistsStack = createNativeStackNavigator<ChecklistsStackParamList>();

export const HomeStackNavigator = props => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HomeMain" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export const ChecklistsStackNavigator = props => {
  return (
    <ChecklistsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ChecklistsStack.Screen
        name="ChecklistMain"
        component={CheckListScreen}
      />
    </ChecklistsStack.Navigator>
  );
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabNavigator = props => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Checklists" component={CheckListScreen} />
    </Tab.Navigator>
  );
};

export const TopNavigator = props => {
  return (
    <MainNavStack.Navigator screenOptions={{headerShown: false}}>
      {/* <MainNavStack.Screen name="Login" component={LoginScreen} */}
      <MainNavStack.Screen name="App" component={TabNavigator} />
    </MainNavStack.Navigator>
  );
};
