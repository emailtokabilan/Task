import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import Footer from './Footer.js';
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import React from 'react'
import { useHistory } from 'react-router-dom';









function Content() {
    let history = useHistory();

    let redirect = () => {
      history.push('./NextPage')

    }
    return (
     <Router>
        <React.Fragment>

        <div className='content'>

           

           
            <div className='row next justify-content-md-center'>
                <div className='col-md-4 justify-content-md-center'>       
                
                <Link className='btn btn-dark m-2'  onClick={redirect}>
                                   <img src='https://st.depositphotos.com/1032577/4812/i/950/depositphotos_48129893-stock-photo-frame-with-daisies-and-lettering.jpg'/>
                             
                                </Link>
                                     </div>
               
            </div>
            
          
            <div id='footer' className='row'>
                <div className='col-md-12'>
                    <Footer />
                </div>

            </div>
        </div>
  
        </React.Fragment>
      
       
        </Router>
       
      
    );

}


export default Content;
