import React from 'react';
import { Switch, Route } from "react-router-dom";
import Signin from './Signin';
import Signup from './Signup';

const MarketingRouter = ({onSignIn}) => {
  return (
    <Switch>
      <Route exact path="/auth/signin" >
          <Signin onSignIn={onSignIn} />
      </Route>
      <Route exact path="/auth/signup" >
          <Signup onSignIn={onSignIn} />
      </Route>
    </Switch>
  );
};

export default MarketingRouter;
