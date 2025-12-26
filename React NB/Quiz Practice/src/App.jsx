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

   
  };

  return (
   <>
   </>
  );
}