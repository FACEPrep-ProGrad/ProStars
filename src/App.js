import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import contacts from './prostars.json'
import ContactList from './components/ProstarsList'
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
        <main className="container">
        
            <ContactList contacts={contacts}/>
      
      </main>
      </div>
    );
  }
}

export default App;
