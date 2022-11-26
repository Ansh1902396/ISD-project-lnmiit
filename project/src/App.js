
import './App.css';

const App = () => {
  return (
    <div className="App">
    <header>
        <ul name="LinksList" className="Nav">
            <li className="Nav">Page 1</li>
            <li className="Nav">Page 2</li>
            <li className="Nav">Page 3</li>
        </ul>
    </header>

    <h2>Enter Login Details :</h2>

    <form>
        <label>User name:
          <input type="text" id="uname" name="uname"></input>
        </label>
        
        <label>Password:
          <input type="text" id="pass" name="pass"></input>
        </label>
        <button>
          Login
        </button>

    </form>
    </div>
  );
}

export default App;
