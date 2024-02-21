import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import DisplayUserInfo from './components/FunctionalComponentProps';
import UseStateHook from './components/useStateHook';
import UseEffectHook from './components/useEffectHook';
import UseReducerHook from './components/useRecucerHook';
import TodoApp from './components/TodoApp';
import ParentComponent from './components/Redux/ParentComponent';
import SignUpForm from './components/SignUpForm';



//App or main component
function App() {
  const valueForProp = "Hello! this is a value for props";
  const userInfo = {
    name:'Sudha',
    email: 'sudha@gmail.com'
  }
  return (
    <div className="App">
      <p>Hello World</p>
      <Abc />     
      <Abc />     
      <ClassComponent  someProp = {valueForProp}/>
      <DisplayUserInfo user = {userInfo} />
      <UseStateHook />
      <UseEffectHook />
      <UseReducerHook />
      <TodoApp />
      <ParentComponent />
      <SignUpForm />
     
    </div>
  );
}


//Component - this return JSX
function Abc(){
  var x = 10;
  return(
    <div>
      Hello {x}
    </div>
  )
}
export default App;
