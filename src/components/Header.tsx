import avatar from "../image/avatar.jpeg";

function Header() {
  return (
    <header>
      <h1 className="hello">WELC🙇‍♂️ME</h1>
      <div className="headerArticle">
        <div className="headerAvatar">
          <img src={avatar} alt="avatar" />
        </div>
        <div className="headerMain">
          <span className="title bolder">
            FE_DEVELOPER <span className="smaller">되고 싶은...</span>
          </span>
          <span>
            🧐 저의 이름은 <span className="bolder">노욱진</span>입니다
          </span>
          <span>
            🤔 제 학번은 <span className="bolder">201811105</span> 입니다
          </span>
          <span>
            👨‍💻 현재 저는 <span className="bolder">인문융합자율학부</span>이며
            <span className="bolder"> 소프트웨어공학</span>을 주전공으로
            공부하고 있습니다
          </span>
          <span>🐢 느리지만 열심히 배우려고 노력하고 있습니다 </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
