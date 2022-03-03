import "./style.css";
import React from "react";
import Button from "./Button";
import Result from "./Result";
import { currencies } from "../currencies";

const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = React.useState("");
  const onAmountChange = (event) => setAmount(event.target.value);

  const [inputCurrency, setInputCurrency] = React.useState("Złoty");
  const onSetInputCurrency = (event) => setInputCurrency(event.target.value);

  const getRateInputCurrency = () =>
    currencies.find((currency) => currency.name === inputCurrency).rate;
  const rateInputCurrency = getRateInputCurrency(onSetInputCurrency);

  const [outputCurrency, setOutputCurrency] = React.useState("Złoty");
  const onSetOutputCurrency = (event) => setOutputCurrency(event.target.value);

  const getRateOutputCurrency = () =>
    currencies.find((currency) => currency.name === outputCurrency).rate;
  const rateOutputCurrency = getRateOutputCurrency(onSetOutputCurrency);

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult(amount, rateInputCurrency, rateOutputCurrency);
  };

  return (
    <form onSubmit={onFormSubmit} className="form">
      <fieldset className="form__fieldset">
        <legend className="form__legend">Przelicz walutę</legend>
        <p className="form__paragraph">
          <label>
            <span className="form_labelText">Kwota:*</span>
            <input
              className="form__input"
              placeholder="Podaj kwotę w zł"
              required
              type="number"
              step="1"
              min="1"
              value={amount}
              onChange={onAmountChange}
            />
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            <span className="form_labelText">Przelicz z:</span>
            <select
              name="currency"
              className="form__select"
              onChange={onSetInputCurrency}
            >
              {currencies.map((curency) => (
                <option key={curency.shortName} value={curency.name}>
                  {curency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            <span className="form_labelText">Przelicz na:</span>
            <select
              name="currency"
              className="form__select"
              onChange={onSetOutputCurrency}
            >
              {currencies.map((curency) => (
                <option key={curency.shortName} value={curency.name}>
                  {curency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <Result result={result} />
      </fieldset>
      <Button />
    </form>
  );
};

export default Form;
