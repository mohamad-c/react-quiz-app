import { createContext, useState } from "react";
import confetti from "canvas-confetti";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  
  const [value, setValue] = useState("");
  const [questionCounter, setQuestionCounter] = useState(0);
  const [indexCounter, setIndexCounter] = useState(1);
  const [checkAnswer, setCheckAnswer] = useState();
  const [answerValue, setAnswerValue] = useState();
  const [valueArr, setValueArr] = useState([]);
  const [text, setText] = useState(false);

  const quizText = `Game over you answered only ${
    valueArr.filter(Boolean).length
  } correctly.`;

  const finishedFunc = () => {
    setText(!text);
    confetti();
  };

  const nextQuestion = () => {
    setIndexCounter((index) => index + 1);
    setQuestionCounter((index) => index + 1);
    setValue("");
  };

  const answerIsTrue = () => {
    nextQuestion();
  };

  return (
    <QuizContext.Provider
      value={{
        value,
        setValue,
        questionCounter,
        setIndexCounter,
        indexCounter,
        setQuestionCounter,
        nextQuestion,
        checkAnswer,
        setCheckAnswer,
        answerIsTrue,
        answerValue,
        setAnswerValue,
        setValueArr,
        finishedFunc,
        quizText,
        text,
        setText,
        valueArr
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
