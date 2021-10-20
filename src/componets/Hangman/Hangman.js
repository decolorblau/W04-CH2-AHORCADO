import PropType from "prop-types";

const Hangman = ({ linesSVG, wrongLetters }) => {
  const wrongLines = linesSVG.slice(0, wrongLetters);
  return wrongLines;
};

Hangman.protoType = {
  linesSVG: PropType.array.isRequired,
  wrongLetters: PropType.number.isRequired,
};

export default Hangman;
