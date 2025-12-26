import quizData from './quizData.json';

function App() {
  
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [result, setResult] = useState(null);

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


  };

  return (
   <>
   </>
  );
}