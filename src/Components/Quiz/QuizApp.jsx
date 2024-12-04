import { useState, createContext, useContext } from "react";
import "./QuizApp.css"; // Import the CSS file

const GameStateContext = createContext();

function QuizApp() {
  const [gameState, setGameState] = useState("playing");
  const [score, setScore] = useState(0);

  return (
    <GameStateContext.Provider value={{ gameState, setGameState, score, setScore }}>
      <div className="div-main">
        <h1 className="mt-3 fw-bold p-3">Take a Assessment</h1>
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </div>
    </GameStateContext.Provider>
  );
}

function Quiz() {
  const { score, setScore, setGameState } = useContext(GameStateContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const Questions = [
    { prompt: "What is my name?", optionA: "John", optionB: "Jake", optionC: "Josh", optionD: "Pedro", answer: "optionD" },
    { prompt: "Which of these is not a programming language?", optionA: "Python", optionB: "JavaScript", optionC: "MC-03", optionD: "Java", answer: "optionC" },
    { prompt: "Which of these is not a JavaScript framework?", optionA: "React", optionB: "Angular", optionC: "Vue", optionD: "Java", answer: "optionD" },
  ];

  const handleOptionClick = (option) => {
    console.log(`Option Clicked: ${option}, Current Score: ${score}`); // Debug log

    if (!selectedOption) {
      setSelectedOption(option);
      setShowAnswer(true);
      if (Questions[currentQuestion].answer === option) {
        console.log("Correct answer selected!");
        setScore((prevScore) => {
          console.log(`Updating score from ${prevScore} to ${prevScore + 1}`);
          return prevScore + 1;
        });
      }
    }
  };

  const nextQuestion = () => {
    console.log("Proceeding to next question");
    setSelectedOption("");
    setShowAnswer(false);

    if (currentQuestion === Questions.length - 1) {
      setGameState("finished");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
    <div className="div-main">
      <div className="container Quiz-container">
        <h1 className="quiz-heading">{Questions[currentQuestion].prompt}</h1>
        <div className="options">
          {["optionA", "optionB", "optionC", "optionD"].map((option) => (
            <button
              key={option}
              className={`button ${showAnswer
                ? option === Questions[currentQuestion].answer
                  ? "correct"
                  : option === selectedOption
                    ? "wrong"
                    : ""
                : ""
                }`}
              onClick={() => handleOptionClick(option)}
              disabled={showAnswer}
            >
              {Questions[currentQuestion][option]}
            </button>
          ))}
        </div>
        {showAnswer && (
          <button className="button" onClick={nextQuestion}>
            {currentQuestion === Questions.length - 1 ? "Finish Quiz" : "Next Question"}
          </button>
        )}
      </div>
    </div>
  );
}

function EndScreen() {
  const { score, setScore, setGameState } = useContext(GameStateContext); // Include `score` in the destructured context

  const restartQuiz = () => {
    setScore(0); // Reset score
    setGameState("playing"); // Reset game state
  };

  return (
    <div className="container Quiz-Container2">
      <h1>Quiz Finished</h1>
      <h2>Your Score: {score} / 3</h2> {/* Correctly accessing `score` */}
      <button className="button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}



export default QuizApp;
