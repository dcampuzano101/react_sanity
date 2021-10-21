// import { client, urlFor } from './sanityClient';
import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import AllPosts from './components/AllPosts';

const App = () => {
  return (
    <Router>
      <div className='container mx-auto border-black border-4 h-screen'>
        <NavBar />
        <div>
          <Route path='/' component={Main} exact />
          <Route path='/posts' component={AllPosts} exact />
          <Route path='/about' component={About} exact />
          <Route path='/contact' component={Contact} exact />
        </div>
      </div>
    </Router>
  );
};

export default App;
