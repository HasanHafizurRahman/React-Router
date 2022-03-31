import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Error from './Component/Error/Error';
import FriendDetails from './Component/FriendDetails/FriendDetails';
import Friends from './Component/Friends/Friends';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/friends' element={<Friends></Friends>}></Route>
        <Route path='/friend/:friendId' element={<FriendDetails></FriendDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
