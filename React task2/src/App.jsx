import logo from './logo.svg';
import './App.css';
import Greet from './components/GreetClass';
import GreetFun from './components/GreetFun';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoApp from './components/TodoApp';


function App() {
  return (
    <div className="App">
      {/* <h1>hello</h1> */}
      {/* <Greet count={4} name="abc" /> */}
      {/* <GreetFun /> */}
      {/* <TodoInput addTodo={(text) => { console.log(text) }} /> */}
      {/* <TodoItem todo="asd" /> */}
      <TodoApp />
    </div>
  );
}

export default App;
