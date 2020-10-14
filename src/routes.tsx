import { BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import landing from './pages/landing';
import orphanagesMap from './pages/orphanagesMap'

const Routes = () => {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={landing}/>
        <Route path="/app" component={orphanagesMap}/>
      </Switch>
      </BrowserRouter>
    );
};

export default Routes;