import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import Departments from './components/Departments';
import NoMatch from './components/NoMatch';
import { Container, } from "semantic-ui-react";
import Navbar from './components/Navbar';
import Stores from './components/Stores';
import StoresForm from './components/StoresForm';
import StoreView from './components/StoreView';

const App = () => (
  <Fragment>
    <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/departments" component={Departments} />
          <Route component={NoMatch} />
          <Route exact path="/stores/new" component={StoresForm} />
          <Route exact path="/stores" component={Stores} />
          <Route exact path="/stores/new" component={StoresForm} />
          <Route exact path="/stores/:id" component={StoreView} />
        </Switch>
      </Container>
  </Fragment>
);

export default App;
