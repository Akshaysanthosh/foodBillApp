//routing files
import React, { lazy, Suspense } from "react";
import { RENDER_URL } from "../Utils/Urls";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory({
  hashType: "slash"
});
const AppContainer = lazy(() => import("../Modules/Components/AppContainer"));


const Routes = () => {
  return (
    <Router basename="/">
          <Suspense fallback={<div className="displayNone"></div>}>
          <Switch>
            <Route
              exact
              path={RENDER_URL.HOME_URL}
              component={AppContainer}
            />

          </Switch>
      </Suspense>
    </Router>
  );
};
export default Routes;