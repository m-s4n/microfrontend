import React from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Pricing from "./Pricing";

const MarketingRouter = () => {
  return (
    <Switch>
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/" component={Landing} />
    </Switch>
  );
};

export default MarketingRouter;
