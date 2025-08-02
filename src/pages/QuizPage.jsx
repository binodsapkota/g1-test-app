import { useState } from "react";
import questions from "../data/questions.json";
import QuestionCard from "../components/QuestionCard";
import BuyMeCoffee from "../components/BuyMeCofee";
import GoogleAd from "../components/GoogleAd";


const QuizPage = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (selected) => {
    if (selected === questions[index].answer) {
      setScore(score + 1);
    }
    if (index + 1 < questions.length) {
      setIndex(index + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      {!showScore ? (
        <QuestionCard question={questions[index]} handleAnswer={handleAnswer} />
      ) : (
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold">Quiz Completed 🎉</h1>
          <p className="mt-4 text-lg">Your Score: {score} / {questions.length}</p>
         
        </div>
      )}
      <BuyMeCoffee />
      <GoogleAd client="ca-pub-xxxxxxxxxx" slot="xxxxxxxxxx" />
    </div>
  );
};

export default QuizPage;
