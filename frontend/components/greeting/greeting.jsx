import React from 'react';
import {Link} from 'react-router-dom';

const Greeting = ({currentUser,logout}) => {
  if (currentUser) {
    return (
      <div className="logged-in">
        <h2>{currentUser.username}</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div className="logged-out">
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </div>
    );
  }
};

export default Greeting;
