/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Clock from "./components/Clock";
import CountUp from "./components/CountUp";
import WaitMessage from "./components/WaitMessage";

function App() {
  return (
    <section css={sortItem}>
      <CountUp />
      <WaitMessage />
      <Clock />
    </section>
  );
}

export default App;

const sortItem = css`
  display: flex;
  flex-direction: column;
  padding: 30px;
  font-size: 22px;
  font-weight: 700;
`;