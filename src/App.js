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
  const [pets, setPets] = useState([]);
  const [creatures, setCreatures] = useState([]);
  const [species, setSpecies] = useState([]);

  function handleLoggedUser(userName) {
    setUser(userName);
    console.log(`${userName} is logged in.`);
  }

  function handleLogOff() {
    setUser("");
  }

  useEffect(() => {
    fetch("http://localhost:9292/creature", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(setCreatures)
      .catch((err) => console.log("💀", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/species", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log("🎈", data))
      .catch((err) => console.log("💀", err));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9292/pet", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(setPets)
      .catch((err) => console.log("🔥", err));
  }, []);

  function handleNewSpecies(sName, sDesc) {
    console.log(`Name: ${sName} & Desc: ${sDesc}`);

    // fetch("http://localhost:9292/species", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     species_name: sName,
    //     description: sDesc,
    //     user_id: null,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then(setSpecies)
    //   .catch((err) => console.log("💀", err));
  }
  console.log("🌶", species);
  return (
    <div id="app">
      <h1>3CPO's Curiosities</h1>
      <Router>
        <NavBar user={user} />
        {user !== "" ? <h3>Current User: {user}</h3> : ""}

        <Switch>
          <Route path="/collection">
            <Collection pets={pets} creatures={creatures} user={user} />
          </Route>

          <Route path="/creature">
            <Creatures creatures={creatures} />
          </Route>

          <Route path="/create">
            <Create handleNewSpecies={handleNewSpecies} />
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
