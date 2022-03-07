import "./style.css";
import React from "react";
import Button from "./Button";
import RenderResult from "./RenderResult";
import { currencies } from "../currencies";

const Form = ({ calculateResult, result }) => {
  const [amount, setAmount] = React.useState("");
  const [inputCurrency, setInputCurrency] = React.useState("PLN");
  const [outputCurrency, setOutputCurrency] = React.useState("EUR");

  const onAmountChange = (event) => setAmount(event.target.value);
  const onSetInputCurrency = (event) => setInputCurrency(event.target.value);
  const onSetOutputCurrency = (event) => setOutputCurrency(event.target.value);

  const getRateInputCurrency = () =>
    currencies.find((currency) => currency.shortName === inputCurrency).rate;
  const rateInputCurrency = getRateInputCurrency(onSetInputCurrency);
  
  const getRateOutputCurrency = () =>
    currencies.find((currency) => currency.shortName === outputCurrency).rate;
  const rateOutputCurrency = getRateOutputCurrency(onSetOutputCurrency);

  const onFormSubmit = (event) => {
    event.preventDefault();

    calculateResult(
      amount,
      rateInputCurrency,
      rateOutputCurrency,
      outputCurrency
    );
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
              value={inputCurrency}
            >
              {currencies.map((curency) => (
                <option key={curency.name} value={curency.shortName}>
                  {curency.shortName}
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
              value={outputCurrency}
            >
              {currencies.map((curency) => (
                <option key={curency.name} value={curency.shortName}>
                  {curency.shortName}
                </option>
              ))}
            </select>
          </label>
        </p>
        <div className="form__result">
          <p className="form__paragraphResult">Po przewalutowaniu otrzymasz:</p>
          <RenderResult result={result} />
        </div>
      </fieldset>
      <Button inputCurrency={inputCurrency} outputCurrency={outputCurrency} />
    </form>
  );
};

export default Form;
