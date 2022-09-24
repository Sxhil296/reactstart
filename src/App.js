import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './FunctionClick';
import ClassClick from './ClassClick';
import EventBind from './EventBind';
import EventBind2 from './EventBind2';
import EventBind3 from './EventBind3';
import EventBInd4 from './EventBInd4';

function App() {
  return (
    <div className="App">
      <EventBInd4/>
      {/* <EventBind3 /> */}
      {/* <EventBind2 />
      <EventBind />
      <FunctionClick />
      <ClassClick />
      <Counter />

    <Greet name="Bruce" heroName="Batman" >
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
