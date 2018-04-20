/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import FormPage from 'containers/Form/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import Header from 'components/Header';
// import Footer from 'components/Footer';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 1;
  /* position: absolute; */
  /* top: -5%; */
  /* bottom: 0; */
  /* left: 0; */
  /* right: 0; */
  background: #178cd3;
  width: 100%;
  position: relative;
  top: 100px;
  padding-bottom: 20px;
`;

const theme = {
  blue: '#178cd3',
  white: '#ffffff',
  green: '#67bd45',
  red: '#f44336',
  textDark: '#616161',
  borderDefault: 'rgba(189, 189, 189, 0.5)',
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - SS Insurance Claim"
          defaultTitle="SS Insurance Claim"
        >
          <meta name="description" content="An Insurance Claim Application" />
        </Helmet>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/form" component={FormPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </AppWrapper>
    </ThemeProvider>
  );
}
