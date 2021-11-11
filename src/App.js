import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddUser from './Components/AddUser/AddUser';
import UpdateUser from './Components/UpdateUser/UpdateUser';
import DeleteUser from './Components/DeleteUser/DeleteUser';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
      
          <Route exact path="/">
         
            <Home></Home>
          </Route>
          <Route exact path="/home">
           <Home></Home>
           </Route>
          <Route path="/adduser">
            <AddUser></AddUser>
          </Route>
          <Route path="/updateuser">
            <UpdateUser></UpdateUser>
          </Route>
          <Route path="/deleteuser">
            <DeleteUser></DeleteUser>
           </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
