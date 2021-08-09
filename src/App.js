import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import UserForm from './components/UserForm/UserForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={UserForm}/>
      </div>
    </Router>
  )
}

export default App;
