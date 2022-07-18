/**
 * @format
 */

import 'react-native';
import React from 'react';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import App from 'App';
import {HomeList} from 'components/HomeList/HomeList';
import data from '../data.json';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {
  render,
  screen,
  waitFor,
  fireEvent,
} from '@testing-library/react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TopNavigator} from 'navigators/navigation';

describe('Home', () => {
  const component = (
    <NavigationContainer>
      <TopNavigator />
    </NavigationContainer>
  );
  it('renders the Home Screen on launch', async () => {
    render(component, {});
    const homeScreen = await screen.findByText('Welcome to the Home Screen');
    expect(homeScreen).toBeDefined();
  });

  it('renders the Checklists screen when the Checklists button is tapped', async () => {
    render(component, {});

    const checklistNavButton = screen.getByText('Go To Checklists');

    fireEvent(checklistNavButton, 'press');

    const checklistScreen = await screen.findByTestId('checklist-screen');

    expect(checklistScreen).toBeTruthy();
  });

  it('when given mock data of length 2, it displays two items in FlatList', () => {
    const {getAllByTestId} = render(<HomeList data={data} />, {});
    const name = getAllByTestId('item-name');
    const index = getAllByTestId('item-index');
    const address = getAllByTestId('item-address');
    expect(name.length).toBe(2);
    expect(index.length).toBe(2);
    expect(address.length).toBe(2);
  });
});

// it('renders the HomeList component correctly', () => {
//   const {getByTestId, getByText, queryByTestId, toJSON} = render(<App />);
//   const homeList = getByTestId('home-list');
//   expect(homeList).toBeDefined();
// });
