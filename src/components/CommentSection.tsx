import { ChangeEvent, FormEvent, useState } from "react";

interface IComment {
  name: string;
  content: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<IComment[]>([]);
  const [nameValue, setNameValue] = useState<string>("");
  const [contentValue, setContentValue] = useState<string>("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setComments((prev) => [
      ...prev,
      { name: nameValue, content: contentValue },
    ]);

    setNameValue("");
    setContentValue("");
  }

  function onChangeName(e: ChangeEvent<HTMLInputElement>) {
    setNameValue(e.target.value);
  }

  function onChangeContent(e: ChangeEvent<HTMLInputElement>) {
    setContentValue(e.target.value);
  }

  return (
    <section>
      <h2>{comments.length === 0 ? <>아직 댓글이 없어요ㅠ</> : <>댓글들</>}</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="이름" value={nameValue} onChange={onChangeName} />
        <input
          placeholder="내용"
          value={contentValue}
          onChange={onChangeContent}
        />
        <button>확인</button>
      </form>

      <div>
        {comments.map((comment) => (
          <div>
            <p>
              {comment.name} : {comment.content}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
