import '@babel/polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import theme from './theme';

import GlobalStyles from './styles';
import { ThemeProvider } from 'styled-components';
import DialogProvider from 'app/components/common/Dialogs/Provider';
import Notifications from 'app/components/common/Notifications';
import Router from './Router';

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <DialogProvider>
        <GlobalStyles />

        <Router />

        <Notifications />
      </DialogProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);