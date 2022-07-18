import React from 'react';
import {FlatList, Text, ListRenderItem, View} from 'react-native';

import styles from './HomeList.styles';

import type {House, HouseData} from '../../types';

interface HouseWithIndex extends House {
  index?: string;
}

const renderItem: ListRenderItem<HouseWithIndex> = ({item, index}) => {
  return (
    <View style={styles.item}>
      <Text testID="item-index">{index}</Text>
      <Text testID="item-name">{item.name}</Text>
      <Text testID="item-address">{item.address}</Text>
    </View>
  );
};

export const HomeList: React.FC<{
  data: HouseData;
}> = ({data}) => {
  return (
    <FlatList style={styles.container} renderItem={renderItem} data={data} />
  );
};
