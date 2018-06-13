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

// import TasksList from 'containers/TasksList/Loadable';
import Tasks from 'containers/Tasks';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

// import Footer from 'components/Footer';

import { media } from '../../global-styles';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 0 16px;
  flex-direction: column;
  align-items: center;
  flex: 1;
  width: 100%;
  position: relative;
  padding-top: 55px;
  padding-bottom: 20px;
  color: #444;
  min-width: 300px;
  ${media.desktop`
    width: calc(100vw - 200px);
  `} 
`;

const theme = {
  blue: '#22A4F2',
  white: '#ffffff',
  green: '#2AC772',
  red: '#F26749',
  grey: '#ADC0CC',
  lightGrey: '#6B7D87',
  lighterGrey: '#A4BBC8',
  navyBlue: 'rgba(26, 61, 82, 1)',
  textDark: '#444444',
  borderDefault: 'rgba(189, 189, 189, 0.5)',
  boxShadowDefault: '0 0 8px 0 rgba(0,0,0,.3)',
  boxShadowLight: '0px 2px 3px rgba(0, 0, 0, 0.05)',
};


export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - SimpleTask"
          defaultTitle="Home - SimpleTask"
        >
          <meta name="description" content="Your friendly neighbourhood task manager" />
        </Helmet>
        <Header />
        <Switch>
          <Route exact path="/" component={Tasks} />
          {/* <Route exact path="/form" component={FormPage} /> */}
          <Route path="" component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </AppWrapper>
    </ThemeProvider>
  );
}
