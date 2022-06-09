/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

interface Props {
  title: string;
  summary: string;
}

function Inform({ title, summary }: Props) {
  return (
    <div css={columnSort}>
      <span css={informCategory}>{title}</span>
      <span css={inform}>{summary}</span>
    </div>
  );
}

export default Inform;

const columnSort = css`
  display: flex;
  flex-direction: column;
  height: 5rem;
`;
const informCategory = css`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.9rem;
`;

const inform = css`
  font-size: 1rem;
  font-weight: 300;
`;
