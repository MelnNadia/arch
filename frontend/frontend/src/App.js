import logo from './logo.svg';
import './App.css';
import axios from "axios";

const makeApiRequest =() => {
  axios.get("/api/user").then((response) => {
    console.log(response.data)
  })
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={makeApiRequest}>OK</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        < button onClick={makeApiRequest}>Project</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
      </header>
    </div>
  );
}

export default App;
