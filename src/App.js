import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'

function App() {
  return (
    <div>
      <div>BAthelete</div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/runing' component={runing}/>
      <Route exact path='/shoes' component={shoes}/>
      <Route exact path='/caps' component={caps}/>
      <Route exact path='/tee' component={tee}/>
      <Route exact path='/boxing' component={boxing}/>
    </div>
    )
}

const runing = () => {
  return (
  <div>
    <h1>runing</h1>    
    </div>
  )
}

const shoes = () => {
  return (
  <div>
    <h1>shoes</h1>    
    </div>
  )
}

const caps = () => {
  return (
  <div>
    <h1>caps</h1>    
    </div>
  )
}

const tee = () => {
  return (
  <div>
    <h1>tee</h1>    
  </div>
  )
}

const boxing = () => {
  return (
  <div>
    <h1>boxing</h1>    
    </div>
  )
}


export default App;
