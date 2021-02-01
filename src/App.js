import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Results from "./components/Results";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: []
    }
  }

  formHandler = (count, results) =>{
    this.setState({count, results})
    console.log(this.state.results)
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <Form handler={this.formHandler}/>
        <Results data={this.state.results} count={this.state.count}/>
        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;
