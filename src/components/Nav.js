import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ setLibraryStatus, libraryStatus }) => {
  return (
    <nav className="nav">
      <h2 className="nav__logo">Wave</h2>
      <button
        className="nav__btn"
        onClick={() => setLibraryStatus(!libraryStatus)}
      >
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
