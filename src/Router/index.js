import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Landing } from "../screens";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
};

export default MainRouter;
