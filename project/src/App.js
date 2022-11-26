
import './App.css';
import {Link} from '@mui/material';
import Login from './Login';
function App(){
  return (
    <div className="App">
      
      <header>
          <ul name="LinksList" className="Nav">
              <li className="Nav-link"><Link>Page 1</Link></li>
              <li className="Nav-link"><Link>Page 2</Link></li>
              <li className="Nav-link"><Link>Page 3</Link></li>
          </ul>
      </header>
      <Login/>
      
      
    </div>
  );
}

export default App;
