import React from "react";
import { Switch, Route } from "react-router-dom";
import MarketingApp from '../pages/MarketingApp';

const ContainerRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => {
          return (
            <div>
               Merhaba
               <hr></hr>
               <MarketingApp />
            </div>
          )
      }} />
    </Switch>
  );
};

export default ContainerRouter;
