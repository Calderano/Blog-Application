
import { useState } from 'react';
import Navbar from './components/header/Header';
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route, Outlet,Navigate} from 'react-router-dom';
import DetailView from './components/details/DetailView';

import Login from './components/account/Login';
import CreateBlog from './components/create/CreateBlog';

const PrivateRoute=({isAuth,...props})=>{
  return isAuth?
  <>
   <Navbar/> 
   <Outlet/>
  </>
  :<Navigate replace to="/login" />
}

function App() {
  const [isAuth,isUserAuth]=useState(false);
  return (
    <DataProvider>
    <BrowserRouter>
    <div>
    <Routes>
    <Route path='/login' element={<Login isUserAuth={isUserAuth}/>}/> 

    <Route path='/' element={<PrivateRoute isAuth={isAuth} />} >
      <Route path='/' element={<Home />} />
    </Route>

    <Route path='/create' element={<PrivateRoute isAuth={isAuth} />} >
    <Route path='/create' element={<CreateBlog />} />
    </Route>

    <Route path='/details/:id' element={<PrivateRoute isAuth={isAuth} />} >
    <Route path='/details/:id' element={<DetailView />} />
    </Route>

    </Routes>
    </div>
    </BrowserRouter>
      </DataProvider>
  );
}

export default App;
