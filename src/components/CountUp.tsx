/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function Count() {
  const [count, setCount] = useState<number>(0);
  function CountUp() {
    setCount((prev) => prev + 1);
  }
  return (
    <div css={sortItem}>
      <span css={countNum}>{count}</span>
      <button css={increaseButton} onClick={CountUp}>
        더하기
      </button>
    </div>
  );
}

export default Count;

const sortItem = css`
  display: flex;
  flex-direction: column;
`;

const countNum = css`
  font-size: 30px;
  font-weight: 700;
`;

const increaseButton = css`
  all: unset;
  width: fit-content;
  height: fit-content;
  padding: 10px 8px;
  border-radius: 5px;
  background-color: #e84393;
`;
