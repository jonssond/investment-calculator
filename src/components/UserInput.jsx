import { useState } from "react";

export default function UserInput({ onChangeInput, inputValues }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            name="initialInvestment"
            value={inputValues.initialInvestment}
            onChange={onChangeInput}
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            name="annualInvestment"
            value={inputValues.annualInvestment}
            onChange={onChangeInput}
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
            onChange={onChangeInput}
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            name="duration"
            value={inputValues.duration}
            onChange={onChangeInput}
          />
        </p>
      </div>
    </section>
  );
}
