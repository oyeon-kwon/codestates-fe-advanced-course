import React, { useState, useEffect } from 'react';
import './App.css';
import Feed from './pages/Feed';
import Image from './pages/Image';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';
import Pagination from './components/Pagination';

function App () {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/posts').then(response => setPosts(response.data));
    axios('https://jsonplaceholder.typicode.com/photos').then(response => setImages(response.data));
  }, []);

  return (
    <div>
      <Router>
        <div className='nav'>
          <span className='home-box'>
            <span className='nav-link'>
              {/* <Link to='/'><img src={logo} className='logo' /></Link> */}
              {/* TODO: 로고 넣기 */}
            </span>
            <span className='nav-link'>
              <Link to='/posts'>POST</Link>
            </span>
            <span className='nav-link'>
              <Link to='/images'>IMAGE</Link>
            </span>
          </span>
        </div>
        <Routes>
          <Route path='/' element={<Feed posts={posts} />} />
        </Routes>
        <Routes>
          <Route path='/posts' element={<Feed posts={posts} />} />
        </Routes>
        <Routes>
          <Route path='/images' element={<Image images={images} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
