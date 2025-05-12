// import logo from './logo.svg';
import './App.css';
import GreetFun from './components/GreetFun';
import GreetClass from './components/GreetClass';

function App() {
  return (
    <div className="App">
      <h1>Counter with Yousef </h1>
      <GreetClass count={4} name="abc" />
      <GreetFun count={5} name="abc" />
    </div>
  );
}

export default App;
