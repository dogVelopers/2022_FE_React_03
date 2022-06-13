function Chat(props: any) {
  return (
    <li>
      {props.comments.map((eachComment: any) => {
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
