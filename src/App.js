import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import '../src/App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Layout />
      </BrowserRouter>
    );
  }
}

export default App;
