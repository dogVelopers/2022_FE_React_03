/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import Time from "./components/Time";
import Count from "./components/Count";

function App() {
  return (
    <main css={main}>
      <Time></Time>
      <Count></Count>
    </main>
  );
}

export default App;

const main = css`
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
