import 'bootstrap/dist/css/bootstrap.css'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import '../App.css';


import { BrowserRouter as Router, Route, Switch,Redirect, Link } from "react-router-dom"
import Content from './Content';
import Logout from './Logout';
import NextPage from './NextPage';










const Header = () => {

   
    

    return (
        
      
        <Router>

            <div className='App'>



                <Navbar className='navbar' bg="dark" variant='dark' fixed='top' expand='lg' collapseOnSelect>
                  
                    <Navbar.Toggle />
                    <Navbar.Collapse className='alignhome'>

                        <Nav className=' justify-content-center menuleft'>
                            <NavDropdown title="Menu">
                            <NavDropdown.Item>
                            <Link exact to="/">Home</Link>
                           
                              </NavDropdown.Item>
                              <NavDropdown.Item>
                              <Link to='/back'>Back</Link>
                            
                              </NavDropdown.Item> 
                             
                              <NavDropdown.Item>
                              <Link to='/log'>Logout</Link>
                              </NavDropdown.Item>

                           
                             

                            </NavDropdown>
                            
                          

                        </Nav>
                        <Nav className=' settingend'>
                          
                            
                            <NavDropdown title="Setting">
                            <NavDropdown.Item>
                            <Link >Update</Link>
                           
                              </NavDropdown.Item>
                              <NavDropdown.Item>
                              <Link >Pages</Link>
                            
                              </NavDropdown.Item> 
                                                      
                             

                            </NavDropdown>
                           

                        </Nav>
                       
                          
                            
                           
                           

                    
                       
                  




                    </Navbar.Collapse>


                </Navbar>

                <Switch>

                    <Route exact path="/" component={Content} />
                    <Route  path="/back" component={Content}/>
                    <Route  path="/log" component={Logout}/>
                    <Route path="/NextPage" component={NextPage}/>
                    
                   
                   
                   
                   
                    <Redirect to="/" />


                </Switch>

            </div>
           
        </Router>
     
        



    );

}

export default Header;