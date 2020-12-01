import React,{ lazy, Suspense, useState, useEffect} from "react";
//import MarketingApp from "../pages/MarketingApp";
import Header from "../pages/Header";
//import AuthApp from '../pages/AuthApp';
import {Switch, Route, useHistory, Redirect} from 'react-router-dom';
import Progress from '../Progress';

// Lazy load yükleme ihtiyac halinde yüklensin.

const MarketingAppLazy = lazy(() => import('../pages/MarketingApp'));
const AuthAppLazy = lazy(() => import('../pages/AuthApp'));
const DashboardAppLazy = lazy(() => import('../pages/DashboardApp'));

// Container hangi MF nin gösterileceğine karar verecek.
// route lara exact verme biz yönlendirme yapacağız. sub app'ler exact kullanabilir.
const ContainerRouter = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if(isSignedIn){
      history.push('/dashboard');
    }
    // Buraya koymuyoruz else i o zaman oturum açmadıysa hep / buraya git diyoruz.
  });
  return (
    <div>
      <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
      <Suspense fallback={<Progress />}>
        <Switch>
          <Route path="/auth">
            <AuthAppLazy onSignIn={() => setIsSignedIn(true)} />
          </Route>
          <Route path="/dashboard" >
            {/* ama biz dashboard a gitmek isteyince login değilse / buraya gitsin demek istiyoruz*/}
            {!isSignedIn && <Redirect to="/"/>}
            <DashboardAppLazy />
          </Route>
          <Route path="/" component={MarketingAppLazy} />
        </Switch>
      </Suspense>
    </div>
  );
};

export default ContainerRouter;
