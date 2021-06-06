import "./App.css";
import { Switch, Route } from "react-router";
import axios from "axios";
import { Home } from "./home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Header } from "./home/Header";
import { FavoriteMovieList } from "./favorite/List";

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
    <>
      <Header />
      <Switch>
        <Route path="/favorites">
          <FavoriteMovieList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
