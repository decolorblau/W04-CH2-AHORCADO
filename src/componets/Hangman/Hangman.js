import PropTypes from "prop-types";

const Hangman = ({ linesSVG, wrongLetters }) => {
  const wrongLines = linesSVG.slice(0, wrongLetters);
  return wrongLines;
};

Hangman.protoType = {
  linesSVG: PropTypes.array.isRequired,
  wrongLetters: PropTypes.number.isRequired,
};

export default Hangman;
