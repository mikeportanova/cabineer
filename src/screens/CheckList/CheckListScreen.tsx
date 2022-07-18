import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  ListRenderItem,
  View,
} from 'react-native';

import type {checklistsMainScreenProps} from 'types';

import styles from './CheckListScreen.styles';

const CheckListScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation<checklistsMainScreenProps['navigation']>();
  return (
    <SafeAreaView style={styles.container} testID="checklist-screen">
      <Text>Welcome to the Checklists Screen</Text>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
    </SafeAreaView>
  );
};

export default CheckListScreen;
