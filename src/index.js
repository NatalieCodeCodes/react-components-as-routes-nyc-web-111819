import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink to="/" exact style={link} activeStyle={{ background: 'darkblue' }}>Home</NavLink>
    <NavLink to="/about" exact style={link} activeStyle={{ background: 'darkblue' }}>About</NavLink>
    <NavLink to="/signup" exact style={link} activeStyle={{ background: 'darkblue' }}>Signup</NavLink>
    <NavLink to="/login" exact style={link} activeStyle={{ background: 'darkblue' }}>Login</NavLink>
    <NavLink to="/messages" exact style={link} activeStyle={{ background: 'darkblue' }}>Messages</NavLink>
  </div>;

const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is my about component!</h1>
    </div>
  );
};
 
const Login = () => {
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

const Signup = () => {
  return (
    <h1>This is sign up page</h1>
  )
}

const Messages = () => {
  return (
    <h1>Here's where you get all your messages!</h1>
  )
}

ReactDOM.render(
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/login" component={Login}/>
      <Route exact path="/signup" component={Signup}/>
      <Route exact path="/messages" component={Messages}/>
    </div>
  </Router>,
  document.getElementById('root')
);
