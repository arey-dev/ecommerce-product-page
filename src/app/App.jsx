import { Header } from "../components/Header";
import { Main } from "../components/Main";
import { GlobalStyle } from "../components/styled/GlobalStyle";

export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
