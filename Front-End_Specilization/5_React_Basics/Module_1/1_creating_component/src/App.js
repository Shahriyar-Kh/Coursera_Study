import logo from './logo.svg';
import './App.css';

function Heading(){
  return <h1>This is First React Component</h1>
}

function App() {
  return (
    <div className="App">
       This is the starting code for "Your first component" ungraded lab 
      <Heading/>

    </div>
  );
}

export default App;
