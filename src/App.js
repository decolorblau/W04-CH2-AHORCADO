import { useState } from "react/cjs/react.development";
import "./App.css";
import AlphabetLetter from "./componets/AlphabetLetter/AlphabetLetter";
import WordBox from "./componets/WordBox/WordBox";

function App() {
  const [checkLetter, setCheckLetter] = useState("");

  const alphabet = [
    { id: 10, letter: "A" },
    { id: 20, letter: "B" },
    { id: 30, letter: "C" },
    { id: 40, letter: "D" },
    { id: 50, letter: "E" },
    { id: 60, letter: "F" },
    { id: 70, letter: "G" },
    { id: 80, letter: "H" },
    { id: 90, letter: "I" },
    { id: 100, letter: "J" },
    { id: 110, letter: "K" },
    { id: 120, letter: "L" },
    { id: 130, letter: "M" },
    { id: 140, letter: "N" },
    { id: 150, letter: "Ñ" },
    { id: 160, letter: "P" },
    { id: 170, letter: "Q" },
    { id: 180, letter: "R" },
    { id: 190, letter: "S" },
    { id: 200, letter: "T" },
    { id: 210, letter: "U" },
    { id: 220, letter: "V" },
    { id: 230, letter: "W" },
    { id: 240, letter: "X" },
    { id: 250, letter: "Y" },
    { id: 260, letter: "Z" },
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

  return (
    <>
      <header className="main-header">
        <h1>HANGMAN</h1>
      </header>

      <div className="word-box">
        {arrPlayWord.map((letter, i) => (
          <WordBox key={i} word={letter} />
        ))}
      </div>
      <div className="alphabet-container">
        {alphabet.map((letterBox) => (
          <AlphabetLetter
            key={letterBox.id}
            letter={letterBox.letter}
            actionOnClick={() => setCheckLetter(letterBox.letter)}
          />
        ))}
      </div>

      {/* <div className="hangman-draw">
        <svg class="hangman" viewBox="0 0 96 96" width="300" height="300">
          <line className="stage11" x1="62" y1="70" x2="56" y2="56"></line>
          <line className="stage10" x1="50" y1="70" x2="56" y2="56"></line>
          <line className="stage9" x1="68" y1="46" x2="56" y2="40"></line>
          <line className="stage8" x1="44" y1="46" x2="56" y2="40"></line>
          <line className="stage7" x1="56" y1="40" x2="56" y2="56"></line>
          <circle className="stage6" cx="56" cy="34" r="6" fill="#bee5eb"></circle>
          <line className="stage5" x1="56" y1="16" x2="56" y2="28"></line>
          <line className="stage4" x1="24" y1="24" x2="32" y2="16"></line>
          <line className="stage3" x1="21" y1="16" x2="60" y2="16"></line>
          <line className="stage2" x1="24" y1="80" x2="24" y2="16"></line>
          <line className="stage1" x1="16" y1="80" x2="32" y2="80"></line>
        </svg>
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
