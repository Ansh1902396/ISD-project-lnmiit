
import './App.css';

import Login from './Login';
function App(){
  return (
    <div className="App">
      
      <header>
          <ul name="LinksList" className="Nav">
              <li className="Nav-link">Page 1</li>
              <li className="Nav-link">Page 2</li>
              <li className="Nav-link">Page 3</li>
          </ul>
      </header>
      <Login/>
      
      
    </div>
  );
}

export default App;
