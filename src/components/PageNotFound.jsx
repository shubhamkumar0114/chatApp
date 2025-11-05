import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div>
        <Link to={"/"}>Home</Link>
      <h1>404 PageNotFound</h1>
    </div>
  );
}

export default PageNotFound
