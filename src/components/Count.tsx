/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";

export default function Count() {
  const [count, setCount] = useState<number>(0);
  const [words, setWords] = useState<string>("잠시만 기다려주세요 🙈");

  useEffect(() => {
    const first = setTimeout(() => {
      setWords("거의 다 됐어요! 🙉");
    }, 3000);
    return () => {
      clearTimeout(first);
    };
  }, []);

  useEffect(() => {
    const second = setTimeout(() => {
      setWords("인증이 완료되었어요 🙊");
    }, 8000);
    return () => {
      clearTimeout(second);
    };
  }, []);

  return (
    <section>
      <div css={countBox}>
        <h1>{count}</h1>
        <button
          css={plusButton}
          onClick={() => {
            setCount((prev) => prev + 1);
          }}
        >
          PUSH
        </button>
      </div>
      <span css={text}>{words}</span>
    </section>
  );
}

const countBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const plusButton = css`
  height: 1.8rem;
  margin-left: 0.5rem;
  background-color: white;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 5px 5px 5px black;
  font-weight: bolder;
  color: red;
  &:active {
    transform: translateY(0.08rem);
  }
`;
const text = css`
  display: block;
  text-align: center;
`;
