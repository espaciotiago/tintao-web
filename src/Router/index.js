import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Landing, LandingProduct, Store } from "../screens";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products">
          <LandingProduct />
        </Route>

        <Route path="/store">
          <Store />
        </Route>

        <Route path="/store/:productId">
          <Store />
        </Route>

        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
