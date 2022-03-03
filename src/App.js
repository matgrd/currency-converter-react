import React from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";

function App() {
  const [result, setResult] = React.useState();

  const calculateResult = (amount, rateInputCurrency, rateOutputCurrency) => {
    setResult(() => {
      return (+amount * rateInputCurrency) / rateOutputCurrency;
    });
  };

  return (
    <Container>
      <Header title="Kantor internetowy" />
      <Form calculateResult={calculateResult} result={result} />
    </Container>
  );
}

export default App;
