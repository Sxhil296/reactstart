import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Counter />

    {/* <Greet name="Bruce" heroName="Batman" >
      <p>Children props</p>
    </Greet>
    <Greet name="Clark" heroName="Superman" >
      <button>Action</button>
    </Greet>
    <Greet name="Robert" heroName="Batman" />
    <hr />
    <Welcome name="Sahil" lname="Malik" />
    <hr />
    <Hello />
    <hr />
    <Message /> */}
    </div>
  );
}

export default App;
