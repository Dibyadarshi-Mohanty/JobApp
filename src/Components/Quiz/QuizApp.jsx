import { useState, createContext, useContext } from "react";
import "./QuizApp.css";

const GameStateContext = createContext();

function QuizApp() {
  const [gameState, setGameState] = useState("start");
  const [formData, setFormData] = useState({
    subject: "",
    numberOfQuestions: "",
    difficulty: "",
  });
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const startAssessment = () => {
    if (!formData.subject || !formData.numberOfQuestions || !formData.difficulty) {
      alert("Please fill all fields before starting the assessment!");
      return;
    }
    setGameState("playing");
  };

  return (
    <GameStateContext.Provider value={{ gameState, setGameState, score, setScore }}>
      <div className="div-main">
        {gameState === "start" && (
          <StartPage
            formData={formData}
            handleChange={handleChange}
            startAssessment={startAssessment}
          />
        )}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndScreen />}
      </div>
    </GameStateContext.Provider>
  );
}

function StartPage({ formData, handleChange, startAssessment }) {
  return (
    <div className="container Quiz-container">
      <h1 className="quiz-heading">Take a Assessment </h1>
      <div className="form-field ">
        <label htmlFor="subject">Language</label>
        <select
          name="subject"
          id="subject"
          value={formData.subject}
          onChange={handleChange}
        >
          <option value="">Select Language</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="c++">C++</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="numberOfQuestions">Number of Questions</label>
        <select
          name="numberOfQuestions"
          id="numberOfQuestions"
          value={formData.numberOfQuestions}
          onChange={handleChange}
        >
          <option value="">Select Number</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="difficulty">Difficulty Level</label>
        <select
          name="difficulty"
          id="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <button className="assessment-btn" onClick={startAssessment}>
        Start Assessment
      </button>
    </div>
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
    if (!selectedOption) {
      setSelectedOption(option);
      setShowAnswer(true);
      if (Questions[currentQuestion].answer === option) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  };

  const nextQuestion = () => {
    setSelectedOption("");
    setShowAnswer(false);

    if (currentQuestion === Questions.length - 1) {
      setGameState("finished");
    } else {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  return (
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
  );
}

function EndScreen() {
  const { score, setScore, setGameState } = useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("start");
  };

  return (
    <div className="container Quiz-Container2">
      <h1>Quiz Finished</h1>
      <h2>Your Score: {score} / 3</h2>
      <button className="button" onClick={restartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default QuizApp;
