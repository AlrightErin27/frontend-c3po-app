import { useState } from "react";
import { useHistory } from "react-router-dom";

function LogIn({ handleLoggedUser, handleLogOff, user }) {
  const [val, setVal] = useState("");
  const history = useHistory();

  function handleChange(e) {
    setVal(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    handleLoggedUser(val);
    setVal("");
    history.push("/collection");
  }

  return (
    <div>
      {user !== "" ? (
        <button onClick={handleLogOff}>Log Off</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <label id="form-label">Welcome:</label>
          <input
            type="text"
            placeholder="Jedi Name..."
            onChange={handleChange}
          />
          <input type="submit" id="form-submit" />
        </form>
      )}
    </div>
  );
}

export default LogIn;
