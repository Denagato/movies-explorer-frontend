import { Route, Switch } from "react-router-dom";
import "./App.css";

import HeaderMain from "../HeaderMain/HeaderMain";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import PopupMenu from "../PopupMenu/PopupMenu";

import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <HeaderMain />
          <Main />
          <Footer />
        </Route>
        <Route exact path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route exact path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route exact path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
        <Route exact path="/signin">
          <Login />
        </Route>
        <Route exact path="/*">
          <NotFound />
        </Route>
      </Switch>
      <PopupMenu />
    </div>
  );
}

export default App;
