
import React from 'react';
import './App.css';
import Header from './component/Header.js';
import { CartProvider } from 'react-use-cart';








const App = () => {






  return (
    <div className='App'>
      <CartProvider>
        <React.Fragment>
      

          <Header />

     
        </React.Fragment>
        </CartProvider>



     

    </div>

  );
}

export default App;
