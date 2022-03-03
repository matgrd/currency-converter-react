import "./style.css";

const Button = ({ inputCurrency, outputCurrency }) => {
  if (inputCurrency === outputCurrency) {
    return (
      <button className="form__button" disabled>
        Proszę, wybierz różne waluty 😅
      </button>
    );
  } else {
    return <button className="form__button">Przelicz</button>;
  }
};

export default Button;
