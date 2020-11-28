import React from "react";
import { Switch, Route } from "react-router-dom";
import MarketingApp from '../pages/MarketingApp';

const ContainerRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => {
          return <MarketingApp />;
      }} />
    </Switch>
  );
};

export default ContainerRouter;
