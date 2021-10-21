// import { client, urlFor } from './sanityClient';
import NavBar from './components/NavBar';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// function App() {
//   return (
//     <div class='container mx-auto border-black border-4 h-screen'>
//       <NavBar />
//     </div>
//   );
// }

const App = () => {
  return (
    <Router>
      <div class='container mx-auto border-black border-4 h-screen'>
        <NavBar />
      </div>
    </Router>
  );
};

export default App;

{
  /* <div class='p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4'>
  <div>
    <div class='text-xl font-medium text-primary'>ChitChat</div>
    <p class='text-gray-500'>You have a new message!</p>
  </div>
</div>; */
}
