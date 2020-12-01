
import {createApp} from 'vue';
import Dashboard from './components/Dashboard.vue';

// mount function to start up the app
const mount = (htmlEl) => {
  const app = createApp(Dashboard);
  app.mount(htmlEl);
};

// if we are in development and isolation
if (process.env.NODE_ENV === "development") {
  const htmlEl = document.querySelector("#dashboard-dev-root");
  if (htmlEl) {
    mount(htmlEl);
  }
}
// call mount
// we are running through container
//export
export { mount };
