import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <header className="App-header">
        <a className="link" href="H">
          Home
        </a>
        <a className="link" href="H">
          New
        </a>
        <a className="link" href="H">
          Popular
        </a>
        <a className="link" href="H">
          Trending
        </a>
        <a className="link" href="H">
          Categories
        </a>
      </header>
    </div>
  );
}

export default App;
