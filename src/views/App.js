import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import ListToDo from "./Todos/ListToDo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Example/Home";
import ListUser from "./User/ListUser";
import DetailUser from "./User/DetailUser";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <MyComponent/> */}
          {/* <ListToDo /> */}
          <Switch>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/todo">
              <ListToDo />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id" exact>
              <DetailUser />
            </Route>
          </Switch>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        {/* Same as */}
        <ToastContainer />
      </div>
    </Router>
  );
}

export default App;
