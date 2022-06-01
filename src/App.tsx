// css
import "./App.css";

//components
import Header from "./components/Header";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Comment />
      </div>
    </div>
  );
}

export default App;
