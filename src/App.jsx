import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import ResultsTable from "./components/ResultsTable";

const initialValues = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

function App() {
  const [inputValues, setInputValues] = useState(initialValues);

  function handleInputChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: +event.target.value,
    });
  }

  return (
    <>
      <Header />
      <UserInput onChangeInput={handleInputChange} inputValues={inputValues} />
      <ResultsTable results={inputValues} />
    </>
  );
}

export default App;
