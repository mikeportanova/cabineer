import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {NavigatorScreenParams} from '@react-navigation/native';
import type {CompositeScreenProps} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

export type MainNavStackParamsList = {
  Login: undefined;
  App: NavigatorScreenParams<RootTabParamList>;
};

export type HomeStackParamList = {
  HomeMain: {data: HouseData};
};

export type ChecklistsStackParamList = {
  ChecklistMain: undefined;
};

export type RootTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Checklists: NavigatorScreenParams<ChecklistsStackParamList>;
};

export type House = {
  name: string;
  address: string;
};

export type HouseData = House[];

export type homeMainScreenProps = CompositeScreenProps<
  NativeStackScreenProps<HomeStackParamList, 'HomeMain'>,
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList>,
    NativeStackScreenProps<MainNavStackParamsList, 'App'>
  >
>;
export type checklistsMainScreenProps = CompositeScreenProps<
  NativeStackScreenProps<ChecklistsStackParamList, 'ChecklistMain'>,
  CompositeScreenProps<
    BottomTabScreenProps<RootTabParamList>,
    NativeStackScreenProps<MainNavStackParamsList, 'App'>
  >
>;
