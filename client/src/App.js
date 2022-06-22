import React, { useState, useEffect } from 'react';
import './App.css';
import Feed from './pages/Feed';
import Post from './components/Post';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import logo from './logo.png'

function App () {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts').then(response => setPosts(response.data));
  }, []);

  return (
    <div>
      <Router>
        <div className='nav'>
          <span className='home-box'>
            <span className='nav-link'>
              <Link to='/'><img src={logo} className='logo' /></Link>
            </span>
          </span>
        </div>
        <Routes>
          <Route path='/' element={<Feed posts={posts} />} />
          <Route path='/posts/:id' element={<Post />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
