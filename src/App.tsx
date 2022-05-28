/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Card from "./components/Card";
import Inform from "./components/Inform";
import Nav from "./components/Nav";
import profile from "./image/profile.jpg";
import Comment from "./components/Comment";

function App() {
  return (
    <div>
      <Nav />
      <div css={contentWrapper}>
        <div css={inWrapper}>
          <h1 css={title}>한슬희 | dogvelopers</h1>
          <div css={informWrapper}>
            <div css={imgSize}>
              <img src={profile} css={profileImg} alt="profile" />
            </div>
            <div css={informWrapperSort}>
              <Inform title="🎁 Date of birth" summary="2001.03.26" />
              <Inform title="✍🏻 Student ID" summary="202014135" />
              <Inform title="✉️ E-mail" summary="3021062@gmail.com" />
            </div>
          </div>
          <div css={introduceSort}>
            <h2>🙋🏻‍♀️ Introduce</h2>
            <span css={summary}>
              • 소프트웨어 공학과에 재학중인 한슬희입니다.
            </span>
            <span css={summary}>• 🍔햄버거와 🎞️영화를 좋아합니다. 😊</span>
          </div>
          <h2>🎈 Experience</h2>
          <div css={expreienceWrapper}>
            <Card />
            <div css={commentWrapper}>
              <Comment />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

const title = css`
  font-size: 2.7rem;
`;

const inWrapper = css`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  line-height: 1.5;
`;

const contentWrapper = css`
  position: relative;
  width: 100%;
  margin: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const informWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2rem;
`;

const informWrapperSort = css`
  display: flex;
  flex-direction: column;
  margin-left: 8rem;
  height: auto;
`;

const imgSize = css`
  width: 17rem;
  height: 17rem;
  border-radius: 70%;
  overflow: hidden;
`;

const profileImg = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const introduceSort = css`
  display: flex;
  flex-direction: column;
  margin: 3.7rem 7rem 3rem 0;
`;

const summary = css`
  font-size: 1rem;
  font-weight: 300;
`;

const expreienceWrapper = css`
  display: flex;
  flex-direction: row;
`;

const commentWrapper = css`
  margin-left: 2rem;
`;
