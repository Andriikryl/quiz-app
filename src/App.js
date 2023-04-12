import { useState } from "react";
import { questions } from "./data";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <div className="quiz">
        <div className="info">
          <p className="question-counter">
            Qusetion {currentQuestion.id}
            <span className="total">/{questions.length}</span>
          </p>
          <p className="question"> {currentQuestion.question} </p>
        </div>
        <div className="options">
          {currentQuestion.options.map((option, i) => (
            <button
              onClick={() => null}
              disabled={selectedOption !== null}
              className={``}
              key={i}
            >
              {option.text}
            </button>
          ))}
          <button
            className="next"
            disabled={!selectedOption}
            onClick={() => null}
          >
            {currentQuestion.id === questions[questions.length - 1].id
              ? "Finish"
              : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
