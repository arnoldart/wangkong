import './App.css';
import Main from './Component/Main/Main';
import Nav from './Component/Nav/Nav'
import Right from './Component/Right/Right';

function App() {

  return (
    <div className="App">
      
      <div className="container">
      <Nav />
      
      <Main />

      <Right />
      </div>

    </div>
  );
}

export default App;
