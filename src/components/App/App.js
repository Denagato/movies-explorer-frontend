import { useEffect, useState } from 'react';
import { Route, Redirect, Switch, useHistory, useLocation } from 'react-router-dom';
import "./App.css";

import HeaderMain from "../HeaderMain/HeaderMain";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import PopupMenu from "../PopupMenu/PopupMenu";
import Preloader from '../Preloader/Preloader';

import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import { register, authorize, getContent, logout } from '../../utils/auth';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import BlockAction from '../BlockAction/BlockAction';

import { moviesApi } from '../../utils/MoviesApi';
import { mainApi } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import {
  DURATION_SHORTFILM,
  COUNT_LOAD_MOVIES_3,
  COUNT_LOAD_MOVIES_2,
  COUNT_START_MOVIES_12,
  COUNT_START_MOVIES_8,
  COUNT_START_MOVIES_5,
  DISPLAY_850,
  DISPLAY_450,
} from '../../constants/constants';

function App() {
  const history = useHistory();
  const location = useLocation();

  const [currentUser, setCurrentUser] = useState({});
  const [allCardsBeat, setAllCardsBeat] = useState([]);
  const [cards, setCards] = useState([]);
  const [userCards, setUserCards] = useState([]);
  const [shortCards, setShortCards] = useState([]);
  const [inputFilterSearch, setInputFilterSearch] = useState('');
  const [onSearch, setOnSearch] = useState(false);
  const [isTokenChecked, setIsTokenChecked] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [textError, setTextError] = useState('');
  const [popup, setPopup] = useState(false);
  const [isShortMovie, setIsShortMovie] = useState(false);
  const [countMoviesToPage, setCountMoviesToPage] = useState({
    current: 0,
    add: 0,
  });

  useEffect(() => {
    function handleResize() {
      const width = document.documentElement.clientWidth;

      setTimeout(() => {
        if (width > DISPLAY_850) {
          setCountMoviesToPage({
            ...countMoviesToPage,
            current: COUNT_START_MOVIES_12,
            add: COUNT_LOAD_MOVIES_3,
          });
        } else if (DISPLAY_450 < width && width < DISPLAY_850) {
          setCountMoviesToPage({
            ...countMoviesToPage,
            current: COUNT_START_MOVIES_8,
            add: COUNT_LOAD_MOVIES_2,
          });
        } else {
          setCountMoviesToPage({
            ...countMoviesToPage,
            current: COUNT_START_MOVIES_5,
            add: COUNT_LOAD_MOVIES_2,
          });
        }
      }, 500);
    }
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  function showError(err) {
    if (err.message === 'Failed to fetch') {
      err.message = 'Нет соединения. Попробуйте позже';
    }
    setTextError(err.message);
  }

  function showMessage(msg) {
    setTextError(msg);
  }

  function handleSearchTrigger(onSearch) {
    setOnSearch(onSearch);
  }

  function handleCountMovies(currentCount) {
    setCountMoviesToPage({ ...countMoviesToPage, current: currentCount });
  }

  function handleOnFilter() {
    isShortMovie ? setIsShortMovie(false) : setIsShortMovie(true);
  }

  function filtrationQuery(cards, inputSearch) {
    return cards.filter((card) => {
      if (card.nameRU.toLowerCase().includes(inputSearch)) {
        return card;
      }
    });
  }

  function filtrationShort(cards) {
    return cards.filter((card) =>
      card.duration < DURATION_SHORTFILM ? card : false
    );
  }

  function initialMovies() {
    if (localStorage.getItem('localAllMovies')) {
      const localAllCards = JSON.parse(localStorage.getItem('localAllMovies'));
      let localUsersCards = [];
      if (localStorage.getItem('localUsersMovies')) {
        localUsersCards = JSON.parse(localStorage.getItem('localUsersMovies'));
      } else {
        localStorage.setItem('localUsersMovies', JSON.stringify([]));
      }
      setAllCardsBeat(localAllCards);
      setCards(localUsersCards);
      const filterShortCards = filtrationShort(localUsersCards);
      setShortCards(filterShortCards);
    } else {
      setIsLoading(true);
      moviesApi
        .getAllCards()
        .then((allCards) => {
          setAllCardsBeat(allCards);
          localStorage.setItem('localAllMovies', JSON.stringify(allCards));
          localStorage.setItem('localUsersMovies', JSON.stringify([]));
        })
        .catch((err) => {
          showError(err);
        })
        .finally(() => setIsLoading(false));
    }
  }

  function runSearch(inputSearch) {
    const filterCards = filtrationQuery(allCardsBeat, inputSearch);
    setCards(filterCards);
    const filterShortCards = filtrationShort(filterCards);
    setShortCards(filterShortCards);
    localStorage.setItem('localUsersMovies', JSON.stringify(filterCards));
  }

  function runSearchSavedMovies(inputSearch) {
    setInputFilterSearch(inputSearch);
  }

  useEffect(() => {
    clearTextError();
  }, [cards, location]);

  useEffect(() => {
    setOnSearch(false);
  }, [location]);

  function handleUpdateUser(newUserInfo) {
    setIsLoading(true);
    mainApi
      .saveUserInfoToServer(newUserInfo)
      .then((userData) => {
        setCurrentUser(userData);
        showMessage('Данные успешно обновлены!');
      })
      .catch((err) => {
        showError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleGetUserMovies() {
    mainApi
      .getUserMovies()
      .then((userSavedMovies) => {
        setUserCards(userSavedMovies);
      })
      .catch((err) => {
        showError(err);
      });
  }

  function handleSaveMovie(newMovie) {
    mainApi
      .saveMovieToServer(newMovie)
      .then((userMovie) => {
        const newUserCards = [userMovie, ...userCards];
        setUserCards(newUserCards);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {});
  }

  function handleDeleteUserMovie(movieDelId) {
    mainApi
      .deleteMovieFromServer(movieDelId)
      .then(() => {
        const newUserMovies = userCards.filter(
          (card) => card._id !== movieDelId && card
        );
        setUserCards(newUserMovies);
        setOnSearch(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function clearTextError() {
    setTextError('');
  }

  function handleAuthRegister(nameUser, email, password) {
    setIsLoading(true);
    register(nameUser, email, password)
      .then(() => {
        handleAuthLogin(email, password);
      })
      .catch((err) => {
        showError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleAuthLogin(email, password) {
    authorize(email, password)
    .then((res) => {
      if (res) {
        localStorage.setItem("jwt", res.token);
        history.push("/movies");
        setLoggedIn(true);
      }
    })
    .catch((err) => console.log(err));
};


  function tokenCheck() {
    setIsTokenChecked(true);
    getContent()
      .then((res) => {
        setLoggedIn(true);
        setCurrentUser(res);
        initialMovies();
        handleGetUserMovies();
        location.pathname === '/signin' || location.pathname === '/signup'
          ? history.push('/movies')
          : history.push(location);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsTokenChecked(false);
      });
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  function signOut() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    history.push("/");
  };

  function handleTogglePopup() {
    popup ? setPopup(false) : setPopup(true);
  }

  return isTokenChecked ? (
    <div className="page page_preloader">
      <Preloader />
    </div>
  ) : (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            {loggedIn ? (
              <Header />
            ) : ( <HeaderMain /> )}
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            exact
            path="/movies"
            loggedIn={loggedIn}
            component={() => (
              <>
                <Header togglePopup={handleTogglePopup} />
                <Movies
                  cards={isShortMovie ? shortCards : cards}
                  userCards={userCards}
                  isLoading={isLoading}
                  countMoviesToPage={countMoviesToPage}
                  isShortMovie={isShortMovie}
                  onSearch={onSearch}
                  runSearch={runSearch}
                  saveMovie={handleSaveMovie}
                  deleteUserMovie={handleDeleteUserMovie}
                  handleCountMovies={handleCountMovies}
                  onFilter={handleOnFilter}
                  searchTrigger={handleSearchTrigger}
                  textError={textError}
                  clearTextError={clearTextError}
                />
                <Footer />
              </>
            )}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            loggedIn={loggedIn}
            component={() => (
              <>
                <Header popup={popup} togglePopup={handleTogglePopup} />
                <SavedMovies
                  userCards={
                    inputFilterSearch && isShortMovie
                      ? filtrationQuery(
                          filtrationShort(userCards),
                          inputFilterSearch
                        )
                      : inputFilterSearch
                      ? filtrationQuery(userCards, inputFilterSearch)
                      : isShortMovie
                      ? filtrationShort(userCards)
                      : userCards
                  }
                  inputFilterSearch={inputFilterSearch}
                  onSearch={onSearch}
                  countMoviesToPage={countMoviesToPage}
                  isShortMovie={isShortMovie}
                  deleteUserMovie={handleDeleteUserMovie}
                  runSearchSavedMovies={runSearchSavedMovies}
                  searchTrigger={handleSearchTrigger}
                  handleCountMovies={handleCountMovies}
                  onFilter={handleOnFilter}
                  textError={textError}
                />
                <Footer />
              </>
            )}
          />
          <ProtectedRoute
            exact
            path="/profile"
            loggedIn={loggedIn}
            component={() => (
              <>
                <Header popup={popup} togglePopup={handleTogglePopup} />
                <Profile
                  signOut={signOut}
                  updateUser={handleUpdateUser}
                  isLoading={isLoading}
                  textError={textError}
                />
              </>
            )}
          />
          <Route exact path="/signup">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register
                authRegister={handleAuthRegister}
                textError={textError}
                clearTextError={clearTextError}
              />
            )}
          </Route>
          <Route exact path="/signin">
            {loggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login
                authLogin={handleAuthLogin}
                textError={textError}
                clearTextError={clearTextError}
              />
            )}
          </Route>
          <Route exact path="/*">
            <NotFound />
          </Route>
        </Switch>
        <PopupMenu popup={popup} togglePopup={handleTogglePopup} />
      </div>
      {isLoading && <BlockAction isLoading={isLoading} />}
    </CurrentUserContext.Provider>
  );
}


export default App;
