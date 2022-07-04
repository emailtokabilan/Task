import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { ChakraProvider} from "@chakra-ui/react";
import { CartProvider } from 'react-use-cart';




ReactDOM.render(
  <CartProvider>
  <ChakraProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ChakraProvider>
  </CartProvider>,
 

  document.getElementById('root')
);


