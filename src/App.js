import { useState, useEffect } from "react";
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
  const [creatures, setCreatures] = useState([]);

  function handleLoggedUser(userName) {
    setUser(userName);
    console.log(`${userName} is logged in.`);
  }

  function handleLogOff() {
    setUser("");
  }

  useEffect(() => {
    fetch("http://localhost:9000/creature", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(setCreatures)
      .catch((err) => console.log("💀", err));
  }, []);
  console.log(creatures);

  return (
    <div id="app">
      <h1>3CPO's Curiosities</h1>
      <Router>
        <NavBar user={user} />
        {/* {user !== "" ? <h3>Current User: {user}</h3> : ""} */}
        <h3>Current User: {user}</h3>
        <Switch>
          <Route path="/collection">
            <Collection />
          </Route>

          <Route path="/creature">
            <Creatures />
          </Route>

          <Route path="/create">
            <Create />
          </Route>

          <Route path="/login">
            <LogInForm
              handleLoggedUser={handleLoggedUser}
              handleLogOff={handleLogOff}
              user={user}
            />
          </Route>

          <Redirect to="/login"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
