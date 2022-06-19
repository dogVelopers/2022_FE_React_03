/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

function WaitMessage() {
  const [textState, setTextState] = useState<string>("잠시만 기다려주세요!!");

  useEffect(() => {
    const timeout = setTimeout(() => setTextState("거의 다 됐어요!"), 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(
      () => setTextState("정보가 확인됐어요 :D"),
      8000
    );
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div css={itemWrapper}>
      <span>{textState}</span>
    </div>
  );
}

export default WaitMessage;

const itemWrapper = css`
  margin: 20px 0;
`;