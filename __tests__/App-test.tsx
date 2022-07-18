/**
 * @format
 */

import React from 'react';
import 'react-native';
import fireEvent from '@testing-library/react-native';
import {setupServer} from 'msw/node';
import {rest} from 'msw';
import App from 'App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {render} from '../jest/test-utils';

it('renders correctly', () => {
  render(<App />, {});
});
it('renders the home tab', () => {});
