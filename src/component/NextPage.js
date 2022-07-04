import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './NextPage.css'
import '../App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Footer from './Footer';







const NextPage = () => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <Router>
      <React.Fragment>


        <div className='App'>




          <div className='page'>


            <h1 className='btn btn-dark'>ADD DETAIL</h1>



            <div className="row justify-content-center">
              <div className="col-6-md justify-content-center">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                  className="main"
                >
                  <label>Name:</label>
                  <br />
                  <input
                    type="text"
                    value={name}
                    required
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                  <br />

                  <label>Age:</label>
                  <br />
                  <input
                    type="text"
                    value={age}
                    required
                    onChange={(e) => {
                      handleAgeChange(e);
                    }}
                  />
                  <br />

                  <label>Email:</label>
                  <br />
                  <input
                    type="email"
                    value={email}
                    required
                    onChange={(e) => {
                      handleEmailChange(e);
                    }}
                  />
                  <br />

                  <label>Password:</label>
                  <br />
                  <input
                    type="password"
                    value={password}
                    required
                    onChange={(e) => {
                      handlePasswordChange(e);
                    }}
                  />
                  <br />
                  <br />

                  <input type="submit" value="Submit" />
                </form>
              </div>
              <br />
              <div className="value">
                <ul class="list-group">
                  <li class="list-group-item">Name :{name}</li>
                  <li class="list-group-item">Age :{age}</li>
                  <li class="list-group-item">Email :{email}</li>
                            <li class="list-group-item">Password :{password}</li>
                </ul>
              </div>
            </div>

          </div>
        <div>
          <Footer/>
        </div>

        </div>





      </React.Fragment>
    </Router>
  )
}

export default NextPage;