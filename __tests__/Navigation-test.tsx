import 'react-native';
import React from 'react';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import App from 'App';
import {HomeList} from 'components/HomeList/HomeList';
import data from '../data.json';
// Note: test renderer must be required after react-native.
import renderer, {ReactTestInstance} from 'react-test-renderer';
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
  it('navigates to Home when Home is tapped while on Home', async () => {
    render(component);
    const homeTabButton: ReactTestInstance =
      screen.getByLabelText('Home, tab, 1 of 2');

    fireEvent(homeTabButton, 'press');

    const homeScreen = await screen.findByText('Welcome to the Home Screen');

    expect(homeScreen).toBeTruthy();
  });
  it('navigates to Checklist when Checklist is tapped while on Home Screen', async () => {
    render(component);

    const checklistTabButton: ReactTestInstance = screen.getByLabelText(
      'Checklists, tab, 2 of 2',
    );

    fireEvent(checklistTabButton, 'press');

    const checklistScreen = await screen.findByText(
      'Welcome to the Checklists Screen',
    );

    expect(checklistScreen).toBeTruthy();
  });
  it('navigates to Home when Home is tapped on Checklist Screen', async () => {
    render(component);
    const checklistTabButton: ReactTestInstance = screen.getByLabelText(
      'Checklists, tab, 2 of 2',
    );

    fireEvent(checklistTabButton, 'press');

    await screen.findByText('Welcome to the Checklists Screen');

    const homeTabButton: ReactTestInstance =
      screen.getByLabelText('Home, tab, 1 of 2');

    fireEvent(homeTabButton, 'press');

    const homeScreen = screen.queryByText('Welcome to the Home Screen');

    expect(homeScreen).toBeTruthy();
  });
});
