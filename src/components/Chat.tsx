import { CommentBox } from "./Comment";

interface ChatProps {
  Comments: CommentBox[];
}

function Chat({ Comments }: ChatProps) {
  return (
    <li>
      {Comments.map((eachComment) => {
        return (
          <span>
            {eachComment.name} : {eachComment.content}
          </span>
        );
      })}
    </li>
  );
}

export default Chat;
