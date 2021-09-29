import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Hoem';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import Links from './components/Links';
import NavLinks from './components/NavLinks';

const isLogin = false;

function App() {
  return (
    <BrowserRouter>
    <Links />
    <NavLinks />
    <Switch>
      <Route path="/login" render={() => isLogin ? <Redirect to='/' /> : <Login />} />
      <Route path="/profile/:id" component={Profile} />
      <Route path="/profile" component={Profile} />
      <Route path="/About" component={About} />
      {/* 마지막은 exact 넣어주지 않으면 모든 url 은 / 를 포함하기 home 으로 들어가버린다. */}
      <Route path="/" exact component={Home} />
      <Route component={NotFound} />
    </Switch>
    </BrowserRouter>
  );
}

export default App;