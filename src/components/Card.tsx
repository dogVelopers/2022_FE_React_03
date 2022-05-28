/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import dogvelopers from "../image/dogvelopers.png";

function Card() {
  return (
    <div css={cardSizeWrapper}>
      <div css={imgSizeWrapper}>
        <img src={dogvelopers} css={cardImg} alt="img" />
      </div>
      <div css={summaryWrapper}>
        <span css={activityName}>🐶 개발자들</span>
        <div css={category}>동아리</div>
        <span css={organization}>성공회대학교</span>
        <span>2022/03/02 ~ </span>
      </div>
    </div>
  );
}

export default Card;

const cardSizeWrapper = css`
  display: flex;
  justify-content: center;
  height: 13.4rem;
  padding-right: 4rem;
  box-shadow: 0px 0px 3px 0px rgb(213, 213, 213);
  cursor: pointer;
`;

const imgSizeWrapper = css`
  width: 200px;
  height: 200px;
`;
const cardImg = css`
  width: 100%;
  height: 100%;
`;

const summaryWrapper = css`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  font-size: 1rem;
`;

const activityName = css`
  font-size: 1.1rem;
  margin: 0.6rem 0;
`;

const category = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: fit-content;
  height: auto;
  padding: 0.05rem;
  font-size: 0.8rem;
  background-color: #eee0da;
  margin: 0.6rem 0;
`;

const organization = css`
  margin-bottom: 0.2rem;
`;
