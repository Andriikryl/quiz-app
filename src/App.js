import { useState } from "react";
import { questions } from "./data";
import "./App.css";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [finished, setFinished] = useState(false);
  const [score, setScore] = useState(0);

  function handleOptionClick(clickedOption) {
    if (selectedOption) return;

    if (clickedOption.id === currentQuestion.answerId) {
      setScore(score + 1);
    }
    setSelectedOption(clickedOption);
  }

  function handleNextQuestionClick() {
    if (!selectedOption) return;

    if (currentQuestion.id === questions[questions.length - 1].id) {
      setFinished(true);
    } else {
      const indexOfCurrentQuestion = questions.findIndex((question) => {
        return question.id === currentQuestion.id;
      });

      setCurrentQuestion(questions[indexOfCurrentQuestion + 1]);
      setSelectedOption(null);
    }
  }

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
              onClick={() => handleOptionClick(option)}
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
            onClick={handleNextQuestionClick}
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
