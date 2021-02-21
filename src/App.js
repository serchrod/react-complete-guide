import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Learrning Rect
        </p>
        <Person></Person>
      </header>
    </div>
  );
}

export default App;
