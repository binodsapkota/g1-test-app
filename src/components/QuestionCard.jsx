const QuestionCard = ({ question, handleAnswer }) => {
    return (
      <div className="p-4 border rounded-xl shadow bg-white">
        {question.image && (
          <img
            src={question.image}
            alt="Question visual"
            className="w-32 mx-auto mb-4"
          />
        )}
        <h2 className="text-lg font-semibold text-center">{question.question}</h2>
        <ul className="mt-4 space-y-2">
          {question.options.map((option, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleAnswer(option)}
                className="w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded"
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  export default QuestionCard;