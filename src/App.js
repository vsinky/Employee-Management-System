import './App.css';
import SignIn from './container/signin/signin';
import SignUp from './container/signup/signup';

function App() {
  return (
    <div className='App'>
      <h1>Employee Management System</h1>
      
      <SignIn/>
      <SignUp/>
    </div>
  );
}

export default App;
