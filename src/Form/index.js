import "./style.css";
import Button from "../Button";
import { currencies } from "../currencies";

const Form = () => {
  const onFormSubmit = (event) => {
    event.preventDefault();
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
            />
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            <span className="form_labelText">Przelicz z:</span>
            <select name="currency" className="form__select">
              {currencies.map((curency) => (
                <option key={curency.shortName} value={curency.shortName}>
                  {curency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__paragraph">
          <label>
            <span className="form_labelText">Przelicz na:</span>
            <select name="currency" className="form__select">
              {currencies.map((curency) => (
                <option key={curency.shortName} value={curency.shortName}>
                  {curency.name}
                </option>
              ))}
            </select>
          </label>
        </p>
        <p className="form__paragraph form__paragraph--modified">
          Po przewalutowaniu otrzymasz:
          <span className="form__result"> N/A</span>
        </p>
      </fieldset>
      <Button />
    </form>
  );
};

export default Form;
