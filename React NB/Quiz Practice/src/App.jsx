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
   </>
  );
}