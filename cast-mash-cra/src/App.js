import './App.css';
import ApiTesting from './components/ApiTesting';
import background from './static/01.png';

function App() {
  return (
    <div className="App">
      <div className="background-container">
        <img className="background" src={background} alt="background" />
      </div>
      <ApiTesting />
    </div>
  );
}

export default App;
