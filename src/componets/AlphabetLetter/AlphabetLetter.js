import { useState } from "react";
import PropTypes from "prop-types";
import "./AlphabetLetter.css";

const AlphabetLetter = ({ letter, actionOnClick }) => {
  const [className, setClassName] = useState("alphabetsoup");

  function actionOnClickClass() {
    setClassName(
      className === "alphabetsoup" ? "alphabetsoup off" : "alphabetsoup off"
    );
  }

  return (
    <div
      className={className}
      onClick={function (event) {
        actionOnClickClass();
        actionOnClick();
      }}
    >
      {letter}
    </div>
  );
};

AlphabetLetter.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default AlphabetLetter;
