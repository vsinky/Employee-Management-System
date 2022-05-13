import './App.css';
import SignIn from './container/signin/signin';
import SignUp from './container/signup/signup';
import { Route, Routes } from 'react-router-dom';
import NotFound from './component/not-found';
import DashBoard from './container/dashboard/dashboard';

function App() {
  return (
    <Routes>
        <Route path='/' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='*' element={<NotFound/>} />
    </Routes>
  );
}

export default App;
