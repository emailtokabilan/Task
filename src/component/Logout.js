import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Log.css';
import { BrowserRouter as Router, Link } from "react-router-dom"

import { useHistory } from "react-router-dom";


const Logout = () => {
  let history = useHistory();

  const redirect = () => {
    history.push('./Content')
  }
  return (
    <Router>
    <div className='log'>
      <div className='row justify-content-center'>
        <div className='col-6-md justify-content-center'>
          <h1>Logout</h1>
        </div>
        </div>
        <div className='row justify-content-center'>
        <div className='col-6-md justify-content-center'>
          <Link onClick={redirect}>Login</Link>
        </div>
        </div>




    </div>
   
    </Router>

  )
}

export default Logout;