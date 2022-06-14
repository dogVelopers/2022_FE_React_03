import { MouseEvent } from "react";

function Category() {
  function onClick(event: MouseEvent<HTMLButtonElement>) {
    alert("아직 구현 안함");
  }

  return (
    <div className="bookmark">
      <button>방명록</button>
      <button onClick={onClick}>사진</button>
    </div>
  );
}

export default Category;
