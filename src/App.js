import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom";
import Modal from './Modal'

const Outsider = () =>
  ReactDOM.createPortal(<div>I'm outside!!</div>, document.body);


class App extends Component {
  state = {
    showModal: false
  };
  toggleModal = () =>
    this.setState({
      showModal: !this.state.showModal
    });
  render = () => (
    <>
      <Modal open={this.state.showModal} oncClose={this.toggleModal}>
        This Modal
      </Modal>
      <button onClick={this.toggleModal}>Show Modal??????</button>
      <div className="App">
        <Outsider />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;

// constructor(props){
//   super(props)
//   ReactGA.event({
//     category: "person on my site",
//     action: "clicked the react link"
//   });
// }

// import ReactGA from "react-ga";

// function initializeReactGA() {
//   ReactGA.initialize("UA-138250788-1");
//   ReactGA.pageview("/homepage");
// }
