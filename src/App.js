import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import LogIn from "./components/LogIn";
import Creatures from "./components/Creatures";
import Species from "./components/Species";
import SavedCritters from "./components/SavedCritters";

function App() {
  console.log("Hello world.");
  return (
    <Router>
      <NavBar />

      <Switch>
        <Route path="/log_in">
          <LogIn />
        </Route>

        <Route path="/browse_creatures">
          <Creatures />
        </Route>

        <Route path="/create_species">
          <Species />
        </Route>

        <Route path="/saved_critters">
          <SavedCritters />
        </Route>
        {/* <Redirect to="/saved_critters"></Redirect> */}
      </Switch>
    </Router>
  );
}

export default App;
