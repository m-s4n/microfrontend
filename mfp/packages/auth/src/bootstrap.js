import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Router } from "react-router-dom";
import {createMemoryHistory, createBrowserHistory} from 'history';
import { StylesProvider } from "@material-ui/core/styles";

// mount function to start up the app
const mount = (htmlEl, {onNavigate, defaultHistory, initialPath, onSignIn}) => {
  const history = defaultHistory || createMemoryHistory({
    // Başlangıç pathleri veriliyor
    initialEntries: [initialPath]
  });
  // Ne zaman navigation olursa işlevi çağıracağız
  
  if(onNavigate){
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <StylesProvider>
      <Router history={history} >
        <App onSignIn={onSignIn} />
      </Router>
    </StylesProvider>,
    htmlEl
  );

  // Bu kısım container'ın cocukla iletişim kurması için kapı.
  // container linklerinden birine tıklandığında bu işlev çağrılacak.
  return {
    onParentNavigate({pathname:nextPathname}){
      const {pathname} = history.location;
      if(pathname !== nextPathname){
        history.push(nextPathname);
      }
    }
  }

};

// if we are in development and isolation
if (process.env.NODE_ENV === "development") {
  const htmlEl = document.querySelector("#auth-dev-root");
  if (htmlEl) {
    mount(htmlEl,{defaultHistory: createBrowserHistory()});
  }
}
// call mount
// we are running through container
//export
export { mount };
