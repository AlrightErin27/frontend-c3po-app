import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import grogu from "../gro.gif";

function Create({ handleNewSpecies }) {
  const [nameVal, setNameVal] = useState("");
  const [descVal, setDescVal] = useState("");

  function handleNameChange(e) {
    // console.log("NAME SPECIES", e.target.value);
    setNameVal(e.target.value);
  }
  function handleDescChange(e) {
    // console.log("DESC SPECIES", e.target.value);
    setDescVal(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("SUBMIT SPECIES", nameVal, descVal);
    handleNewSpecies(nameVal, descVal);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label id="form-label" className="form-text">
          Species Name:
        </label>
        <input type="text" className="form-text" onChange={handleNameChange} />
        <label id="form-label" className="form-text">
          Species Description:
        </label>
        <input type="text" className="form-text" onChange={handleDescChange} />
        <NavLink to="/collection">
          <input type="submit" className="form-submit" />
        </NavLink>
      </form>
      <img src={grogu} alt="grogu_gif" id="grogu" />
    </>
  );
}

export default Create;
