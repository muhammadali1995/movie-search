import "./App.css";
import { Switch, Route } from "react-router";
import axios from "axios";
import { Home } from "./home/Home";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

//add authentication token for every request ot the api
axios.interceptors.request.use(
  (config) => {
     config.headers.authorization = `Bearer ${process.env.REACT_APP_API_KEY}`;
     return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
