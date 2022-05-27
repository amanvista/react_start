import Header from "./containers/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductListing from "./containers/ProductListing";
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      <Route path='/' exact element={ProductListing}/>
      
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
