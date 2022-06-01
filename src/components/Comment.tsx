import { ChangeEvent, FormEvent, useState } from "react";
import Chat from "./Chat";

function Comment() {
  let [state, setState] = useState<string>("첫 댓글을 남겨주세요 ");
  let [count, setCount] = useState<number>(0);
  // 이름, 내용 state
  let [textName, setTextName] = useState<string[]>([]);
  let [textContent, setTextContent] = useState<string[]>([]);
  // 이름입력값, 내용입력값 state
  let [textNameValue, setTextNameValue] = useState<string>("");
  let [textContentValue, setTextContentValue] = useState<string>("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("댓글");
    setTextName((prev) => [...prev, textNameValue]);
    setTextContent((prev) => [...prev, textContentValue]);
    setCount((prev) => prev + 1);
    setTextNameValue("");
    setTextContentValue("");
  }

  function onChangeInput1(event: ChangeEvent<HTMLInputElement>) {
    setTextNameValue(event.target.value);
  }
  function onChangeInput2(event: ChangeEvent<HTMLInputElement>) {
    setTextContentValue(event.target.value);
  }

  return (
    <div className="chat">
      <h3>
        <span>{state}</span>
        <span> ({count})</span>
      </h3>
      <form onSubmit={onSubmit}>
        <input
          className="firstInput"
          placeholder="이름"
          value={textNameValue}
          onChange={onChangeInput1}
          autoFocus
        />
        <input
          className="secondInput"
          placeholder="내용"
          type="text"
          value={textContentValue}
          onChange={onChangeInput2}
        />
        <button type="submit">확인</button>
        <Chat textName={textName} textContent={textContent} />
      </form>
    </div>
  );
}

export default Comment;
