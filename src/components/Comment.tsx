import { ChangeEvent, FormEvent, useState } from "react";
import Chat from "./Chat";

// comments state의 객체 값을 위한 interface 선언
interface CommentBox {
  id: number;
  name: string;
  content: string;
}

function Comment() {
  const [textCount, setTextCount] = useState<string>("첫 댓글을 남겨주세요 ");
  const [comments, setComments] = useState<CommentBox[]>([]);
  const [commentsNumber, setCommentsNumber] = useState<number>(0);
  const [names, setNames] = useState<string>("");
  const [contents, setContents] = useState<string>("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTextCount("댓글");
    // 리액트 불변성을 위한 스프레드 사용, comments state에 객체 하나로 id값, 닉네임과 내용이 나온다
    setComments((prev) => [
      ...prev,
      { id: commentsNumber, name: names, content: contents },
    ]);
    // id값 증가하도록
    setCommentsNumber((prev) => prev + 1);
    // 업데이트 후 이전 값이 비워진다
    setNames("");
    setContents("");
  }

  function onChangeNameInput(event: ChangeEvent<HTMLInputElement>) {
    setNames(event.target.value);
  }
  function onChangeContentInput(event: ChangeEvent<HTMLInputElement>) {
    setContents(event.target.value);
  }

  return (
    <div className="chat">
      <h3>
        <span>{textCount}</span>
      </h3>
      <form onSubmit={onSubmit}>
        <input
          className="nameInput"
          placeholder="이름"
          type="text"
          value={names}
          onChange={onChangeNameInput}
          autoFocus
        />
        <input
          className="contentInput"
          placeholder="내용"
          type="text"
          value={contents}
          onChange={onChangeContentInput}
        />
        <button type="submit">확인</button>
        <Chat comments={comments} />
      </form>
    </div>
  );
}

export default Comment;
