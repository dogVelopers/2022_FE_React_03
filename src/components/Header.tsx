import profile from "../image/profile.jpeg";

function Header() {
  return (
    <div className="header">
      {/* <h1>노욱진</h1> */}
      <div className="headerAvatar">
        <img src={profile} alt="" />
      </div>
      <div className="headerMain">
        <div className="haderMainTitle">
          <span>이름</span>
          <span>생년월일</span>
          <span>학부</span>
          <span>전공</span>
          <span>학번</span>
        </div>
        <div className="headerMainSubtitle">
          <span>노욱진</span>
          <span>98년 03월 15일</span>
          <span>인문융합자율학부</span>
          <span>소프/영어</span>
          <span>201811105</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
