import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
  return (
    <React.Fragment>
      <Header/>
      <Form/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
