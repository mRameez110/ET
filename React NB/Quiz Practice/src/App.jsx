import quizData from './quizData.json';

function App() {
  
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [results, setResults] = useState(null);

    const handleAnswer = (questionId, selectedOption) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: selectedOption,
    });
  };

    const handleSubmit = () => {
    let correctCount = 0;

    quizData.forEach((q) => {
      if (selectedAnswers[q.id] === q.answer) {
        correctCount++;
      }
    });

    setResults(`You got ${correctCount} out of ${quizData.length} correct!`);
    console.log("Answer object ", selectedAnswers)

  };

  return (
   <>
    <h1 className="text-center">Quiz Practice</h1>
      <div className="container p-3"></div>
              {quizData.map((q) => (
          <div className="card m-3" key={q.id}>
            <div className="card-header">{q.statement}</div>
                        <ul className="list-group list-group-flush">
              {q.options.map((opt, optInd) => (
                <li
                  className={`list-group-item ${
                    selectedAnswers[q.id] === opt ? "active" : ""
                  }`}
                  key={optInd}
                  onClick={() => handleAnswer(q.id, opt)}
                  style={{ cursor: "pointer" }}
                >
                  {opt}
                </li>
              ))}
            </ul>
            <button className="btn btn-primary mt-3" onClick={handleSubmit}>
          Submit Quiz
        </button>
        {results && <h3 className="mt-4">{results}</h3>}

   </>
  );
}