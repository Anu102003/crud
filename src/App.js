import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import ListUserComponent from './components/ListUserComponent';
import AddUserComponent from './components/AddUserComponent';

function App() {
  return (
    <div>
      
        <HeaderComponent />
        <div className= "container">
          <Routes>
              <Route exact path = "/" element ={<ListUserComponent/>}></Route>
              <Route path = "/user" element = {<ListUserComponent/>}></Route>
              <Route path = "/add-user" element = {<AddUserComponent/>}></Route>
              <Route path = "/edit-user/:emailid" element = {<AddUserComponent/>}></Route>
            </Routes>
        </div>
        
   
    </div>
  );
}

export default App;
