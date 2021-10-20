import PropTypes from "prop-types";
import "./WordBox.css";

const WordBox = ({ word }) => {
  return <div className="word-box__letter">{word}</div>;
};

WordBox.propTypes = {
  word: PropTypes.string.isRequired,
};

export default WordBox;
