import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { GlobalStyle } from "../components/styled/GlobalStyle";
import { useState } from "react";

export function App() {
  const [orderCount, setOrderCount] = useState(0);

  const handleIncrement = () => {
    setOrderCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (orderCount <= 0) {
      setOrderCount(0);
    } else {
      setOrderCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Main
        count={orderCount}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
    </>
  );
}
