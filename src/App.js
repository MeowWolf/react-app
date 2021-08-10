import logo from './logo.svg';
import './App.css';

const REACT_APP_ENV_VAR  = process.env.REACT_APP_ENV_VAR || "ChangeMe"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {REACT_APP_ENV_VAR}
        </p>
      </header>
    </div>
  );
}

export default App;
