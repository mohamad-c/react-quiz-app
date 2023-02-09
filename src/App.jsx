import "./App.css";
import Card from "./components/Card";
import QuizProvider from "./context/QuizContext";


function App() {
  return (
    <div className="App">
      <QuizProvider>
        <Card />
      </QuizProvider>
    </div>
  );
}

export default App;
