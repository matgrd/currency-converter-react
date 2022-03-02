import "../style.css";

const Result = ({ result }) => {
  return (
    <p className="form__paragraph form__paragraph--modified">
      Po przewalutowaniu otrzymasz:
      <span className="form__result"> {result}</span>
    </p>
  );
};

export default Result;
