/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import TasksList from 'containers/TasksList/Loadable';
import Tasks from 'containers/Tasks';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';

import { AppWrapper, theme } from './Styles';
// import Footer from 'components/Footer';


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
