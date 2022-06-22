/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import React, { useState, useEffect } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState(new Date());

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(new Date());
    }, 0);
  }, []);

  return (
    <div css={timer}>
      {`${hours}:
          ${minutes < 10 ? "0" + minutes : minutes}:
          ${seconds < 10 ? "0" + seconds : seconds}`}
    </div>
  );
}

const timer = css`
  text-align: center;
  font-size: 5rem;
  font-weight: bolder;
`;
