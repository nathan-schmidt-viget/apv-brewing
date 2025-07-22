import './App.css';
import NameGenerator from './component/nameGenerator';
import CalculateApv from './component/calculateApv';

function App() {
  return (
    <div className="app">
      <CalculateApv />
      <NameGenerator />
    </div>
  );
}

export default App;
