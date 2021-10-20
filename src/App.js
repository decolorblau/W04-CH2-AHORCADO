import "./App.css";
import AlphabetLetter from "./componets/AlphabetLetter/AlphabetLetter";
import Hangman from "./componets/Hangman/Hangman";
import WordBox from "./componets/WordBox/WordBox";

function App() {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const wordList = [
    "centimeter",
    "punk",
    "wobble",
    "chemical",
    "sponge",
    "macaroni",
    "positive",
    "pride",
    "aristocrat",
    "expired",
    "destruction",
  ];

  const playWord = wordList[Math.floor(Math.random() * wordList.length)];
  const arrPlayWord = playWord.split("");

  const wrongLetters = ["acd", "b", "c", "d"];

  const linesSVG = [
    <line key="1" className="stage1" x1="16" y1="80" x2="32" y2="80"></line>,
    <line key="2" className="stage2" x1="24" y1="80" x2="24" y2="16"></line>,
    <line key="3" className="stage3" x1="21" y1="16" x2="60" y2="16"></line>,
    <line key="4" className="stage4" x1="24" y1="24" x2="32" y2="16"></line>,
    <line key="5" className="stage5" x1="56" y1="16" x2="56" y2="28"></line>,
    <circle
      key="6"
      className="stage6"
      cx="56"
      cy="34"
      r="6"
      fill="#bee5eb"
    ></circle>,
    <line key="7" className="stage7" x1="56" y1="40" x2="56" y2="56"></line>,
    <line key="8" className="stage8" x1="44" y1="46" x2="56" y2="40"></line>,
    <line key="9" className="stage9" x1="68" y1="46" x2="56" y2="40"></line>,
    <line key="10" className="stage10" x1="50" y1="70" x2="56" y2="56"></line>,
    <line key="11" className="stage11" x1="62" y1="70" x2="56" y2="56"></line>,
  ];

  return (
    <>
      <header className="main-header">
        <h1>HANGMAN</h1>
      </header>
      <div className="hangman-draw">
        <svg className="hangman" viewBox="0 0 96 96" width="300" height="300">
          <Hangman linesSVG={linesSVG} wrongLetters={wrongLetters.length} />
        </svg>
      </div>

      <div className="word-box">
        {arrPlayWord.map((letter) => (
          <WordBox key={letter} word={letter} />
        ))}
      </div>
      <div className="alphabet-container">
        {alphabet.map((letter) => (
          <AlphabetLetter key={letter} letter={letter} />
        ))}
      </div>

      {/* 
      </div>
      <div className="word-box">
        <ul>
          <li className="word-box__letter">C</li>
          <li className="word-box__letter">A</li>
          <li className="word-box__letter">S</li>
          <li className="word-box__letter">A</li>
        </ul>
      </div>
      <div className="alphabet-container">
        <span className="alphabet-soup">A</span>
        <span className="alphabet-soup">A</span>
        <span className="alphabet-soup">A</span>
        <span className="alphabet-soup">A</span>
        <span className="alphabet-soup">A</span>
        <span className="alphabet-soup">A</span>
        <span className="alphabet-soup">A</span>
        <span className="alphabet-soup">A</span>
      </div> */}
    </>
  );
}

export default App;
