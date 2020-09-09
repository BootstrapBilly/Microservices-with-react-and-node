import React from 'react';
import './App.module.css';

//components
import PostCreate from "./Components/PostCreate/PostCreate"

const App = () => {

  return (

    <div className="container">

      <h1>Create Post</h1>
      <PostCreate />

    </div>

  )
}

export default App;
