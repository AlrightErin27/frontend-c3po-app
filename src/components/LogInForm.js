import { useState } from "react";
import { useHistory } from "react-router-dom";
import porg from "../porg.gif";

function LogIn({ handleLoggedUser, handleLogOff, user }) {
  const [val, setVal] = useState("");
  const history = useHistory();

  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleSubmit(e) {
    if (val !== "") {
      e.preventDefault();
      handleLoggedUser(val);
      setVal("");
      history.push("/collection");
    } else {
      alert("Need a username to enter.");
    }
  }

  return (
    <div>
      {user !== "" ? (
        <button onClick={handleLogOff}>Log Off</button>
      ) : (
        <>
          <form onSubmit={handleSubmit} id="form">
            <input
              type="text"
              placeholder="Jedi Name..."
              onChange={handleChange}
              id="form-text"
            />
            <input type="submit" id="form-submit" />
          </form>
          <img src={porg} alt="porg_gif" id="porg" />
        </>
      )}
    </div>
  );
}

export default LogIn;
