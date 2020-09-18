import React from 'react';
import './App.module.css';

//components
import PostCreate from "./Components/PostCreate/PostCreate"
import PostList from "./Components/PostList/PostList"

const App = () => {

  return (

    <div className="container">

      <h1>Create Post!</h1>
      <PostCreate />

      <hr />

      <h1>Posts</h1>
      <PostList />

    </div>

  )
}

export default App;
