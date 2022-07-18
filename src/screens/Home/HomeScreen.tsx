import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  Button,
  ListRenderItem,
  View,
} from 'react-native';

import {HomeList} from 'components/HomeList/HomeList';
import styles from './HomeScreen.styles';

import houseData from '../../../data.json';
import type {homeMainScreenProps} from '../../types';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const navigation = useNavigation<homeMainScreenProps['navigation']>();

  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Text>Welcome to the Home Screen</Text>
      <Button
        title="Go To Checklists"
        onPress={() =>
          navigation.navigate('Checklists', {
            screen: 'ChecklistMain',
          })
        }
      />
      <HomeList data={houseData} />
    </SafeAreaView>
  );
};

export default HomeScreen;
