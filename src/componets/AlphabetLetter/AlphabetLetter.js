import { useState } from "react";
import PropType from "prop-types";
import "./AlphabetLetter.css";

const AlphabetLetter = ({ letter }) => {
  const [className, setClassName] = useState("alphabetsoup");

  function actionOnClick() {
    setClassName(
      className === "alphabetsoup" ? "alphabetsoup off" : "alphabetsoup off"
    );
  }

  return (
    <div className={className} onClick={actionOnClick}>
      {letter}
    </div>
  );
};

AlphabetLetter.propTypes = {
  letter: PropType.string.isRequired,
};

export default AlphabetLetter;
