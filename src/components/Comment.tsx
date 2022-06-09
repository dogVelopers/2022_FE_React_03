/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { ChangeEvent, FormEvent, useState } from "react";

interface IComment {
    name: string;
    summary: string;
}

function Comment() {
    const [comments, setComments] = useState<IComment[]>([]);
    const [messageState, setMessageState] = useState("댓글이 아직 없어요");
    const [nameState, setNameState] = useState<string>("");
    const [summaryState, setSummaryState] = useState<string>("");

    function onSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setComments((prev) => [...prev, { name: nameState, summary: summaryState }])
        setMessageState("댓글들")
        setNameState("")
        setSummaryState("");
    }

    function onNameInput(event: ChangeEvent<HTMLInputElement>) {
        setNameState(event.target.value)
    }

    function onSummaryInput(event: ChangeEvent<HTMLInputElement>) {
        setSummaryState(event.target.value);
    }

    return (
        <div>
            <span css={text}>{messageState}</span>
            <form css={inputWrapper} onSubmit={onSubmitForm}>
                <input placeholder="닉네임" css={eachInput} value={nameState} onChange={onNameInput} />
                <input placeholder="내용" css={eachInput} value={summaryState} onChange={onSummaryInput} />
                <button css={buttonWrapper}>확인</button>
            </form>
            <div css={commentSort}>
                {comments.map((comment) => (
                    <span><b>{comment.name}</b>: {comment.summary}</span>
                ))}</div>
        </div>
    );
}

export default Comment;

const text = css`
  font-size: 1.1rem;
  font-weight: 700;
`;

const inputWrapper = css`
    margin: 0.6rem 0;
`

const eachInput = css`
  all: unset;
  border-bottom: 1px solid black;
  font-size: 0.9rem;
  font-weight: 300;
  margin-right: 1rem;
`;

const buttonWrapper = css`
  all: unset;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
`;

const commentSort = css`
    display: flex;
    flex-direction: column;
    height: 9rem;
    overflow-y: auto;
    margin: 0.7rem 0;
`
