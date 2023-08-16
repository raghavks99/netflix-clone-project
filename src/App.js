import './App.css';
import Homescreen from './Homescreen';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Loginscreen from './Loginscreen';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser, logout } from './features/userSlice';
import { auth } from './firebase';
import ProfileScreen from './ProfileScreen';

function App() {
  const users = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        //logged in 
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        //logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
      <div className="App">
        <Router>
          {!users ? (<Loginscreen />) : (
            <Switch>
              <Route exact path='/profile'>
                <ProfileScreen/>
              </Route>
              <Route exact path='/'>
                <Homescreen />
              </Route>
              <Route exact path='/users'></Route>
            </Switch>
          )}
        </Router>
      </div>
  );
}

export default App;
