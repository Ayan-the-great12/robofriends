import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './index.css';
import 'tachyons';
import * as serviceWorker from './serviceWorker';
// import Hello from './Hello';

//Concept of STATE:
//State 1 object hota ha jo hamari app ko descripe krta ha
//State(parent="App")>>Props(children="SearchBox")
//props value can never be change but state can be changed
// 
ReactDOM.render(
  <React.StrictMode>
      <App />
    {/* <Hello greeting={'Hello! ' + 'Mr.Ayan'}/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
