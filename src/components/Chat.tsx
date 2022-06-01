interface Comment {
  textName: string[];
  textContent: string[];
}

function Chat({ textName, textContent }: Comment) {
  return (
    <li className="chats">
      {textName.map((i, a) => {
        return (
          <div className="text1">
            <span>
              {i} : {textContent[a]}
            </span>
          </div>
        );
      })}
    </li>
  );
}

export default Chat;
