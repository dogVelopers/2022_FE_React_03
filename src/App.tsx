// css
import "./App.css";
import "./css/Header.css";
import "./css/Category.css";
import "./css/Chat.css";
import "./css/Comments.css";

//components
import Header from "./components/Header";
import Category from "./components/Category";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Category />
        <Comment />
      </div>
    </div>
  );
}

export default App;
