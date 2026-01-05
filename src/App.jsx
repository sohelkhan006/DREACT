// import React from 'react';
import './App.css'
import Title from './Title';
import ProductTab from './ProductTab';
import Greeting from './Greeting';
import Form from './Form';
import HelloUser from './Activity';

function App() {
  return (
    <div>
      <HelloUser username= "sohel" textcolor= "red"/>
      <ProductTab/>
      {/* <h1>Server is running successfully</h1>
      <Greeting/>
      <Form/> */}
     </div>
  );
}

export default App
