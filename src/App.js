import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';
import Section from './Section';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="React - Issue 05" />
        
        <Section text="

            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non molestie tortor. Vestibulum egestas elit vel mi semper, et malesuada quam mattis. Aenean placerat ipsum a tincidunt ornare. Mauris est eros, porta sit amet volutpat sit amet, tincidunt sed libero. Donec eget leo eleifend, pulvinar dolor et, maximus tellus. Nam sollicitudin justo ac accumsan dapibus. Nunc gravida elit id eros tristique, quis facilisis quam consequat. Nulla auctor, mi eget efficitur pulvinar, augue est rutrum justo, vel fermentum odio ante non justo. Integer finibus metus eu diam faucibus molestie. Etiam volutpat molestie nibh."/>

        <Footer />
      </div>    );
  }
}

export default App;
