import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core/styles";

// mount function to start up the app
const mount = (htmlEl) => {
  ReactDOM.render(
    <StylesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StylesProvider>,
    htmlEl
  );
};

// if we are in development and isolation
if (process.env.NODE_ENV === "development") {
  const htmlEl = document.querySelector("#marketing-dev-root");
  if (htmlEl) {
    mount(htmlEl);
  }
}
// call mount
// we are running through container
//export
export { mount };
