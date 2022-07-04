import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import '../App.css';
import { Navbar } from 'react-bootstrap'




function Footer() {
    return (

<Navbar bg="dark" variant='dark' fixed='bottom' expand='lg' collapseOnSelect>
        <div className='row footer'>
           
            <div className='col-sm-12 col-sm-4'>
                <div className='link5'>
                    <h3 >Welcome</h3>
                  </div>
            </div>
        </div>
        </Navbar>





    );
}

export default Footer;