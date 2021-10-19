import PropTypes from "prop-types";
import "./WordBox.css";

const WordBox = ({ word }) => {
  return <div className="word-box__letter">{word}</div>;
};

WordBox.propTypes = {
  number: PropTypes.string.isRequired,
};

export default WordBox;
