import { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import LogInForm from "./components/LogInForm";
import Creatures from "./components/Creatures";
import Create from "./components/Create";
import Collection from "./components/Collection";

function App() {
  const [user, setUser] = useState("");

  function handleLoggedUser(userName) {
    setUser(userName);
    console.log(`${userName} is logged in.`);
  }

  return (
    <Router>
      <NavBar />
      {user !== "" ? <h3>Current User: {user}</h3> : ""}

      <Switch>
        <Route path="/collection">
          <Collection />
        </Route>

        <Route path="/creatures">
          <Creatures />
        </Route>

        <Route path="/create">
          <Create />
        </Route>

        <Route path="/log_in">
          <LogInForm handleLoggedUser={handleLoggedUser} />
        </Route>

        <Redirect to="/collection"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
