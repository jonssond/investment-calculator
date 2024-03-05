import { useState } from "react";

const initialValues = {
  initialInvestment: "",
  annualInvestment: "",
  expectedReturn: "",
  duration: "",
};

export default function UserInput() {
  const [inputValues, setInputValues] = useState(initialValues);

  function handleInputChange(event) {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    });
  }

  console.log(inputValues);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            name="initialInvestment"
            value={inputValues.initialInvestment}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annualInvestment"
            value={inputValues.annualInvestment}
            onChange={handleInputChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            name="expectedReturn"
            value={inputValues.expectedReturn}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            name="duration"
            value={inputValues.duration}
            onChange={handleInputChange}
          />
        </p>
      </div>
    </section>
  );
}
