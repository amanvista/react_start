import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Counter from "./counter/Counter";
function App() {
  return (
    <div className="App">
      <Router>
        <Counter />
        <Routes>
          <Route path='/counter' element={Counter} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
