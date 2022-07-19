import {render, RenderResult} from '@testing-library/react-native';
import React, {ReactElement} from 'react';
// import {ThemeProvider} from 'my-ui-lib'
// import {TranslationProvider} from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'

// const AllTheProviders = ({children}) => {
//   return (
//     <ThemeProvider theme="light">
//       <TranslationProvider messages={defaultStrings}>
//         {children}
//       </TranslationProvider>
//     </ThemeProvider>
//   )
// }

interface RenderOptions {
  wrapper?: React.ComponentType<any>;
}

const customRender = (ui: ReactElement, options: RenderOptions): RenderResult =>
  //   render(ui, {wrapper: AllTheProviders, ...options})
  render(ui, {...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
