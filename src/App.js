import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

const JacketsPage = () => (
  <div>
    <h1>JACKETS PAGE</h1>
  </div>
)
const SneakersPage = () => (
  <div>
    <h1>SNEAKERS PAGE</h1>
  </div>
)
const WomenPage = () => (
  <div>
    <h1>WOMEN PAGE</h1>
  </div>
)
const MenPage = () => (
  <div>
    <h1>MEN PAGE</h1>
  </div>
)
function App() {
  return (
    <div>  
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/hats" component={HatsPage}/>
        <Route exact path="/jackets" component={JacketsPage}/>
        <Route exact path="/sneakers" component={SneakersPage}/>
        <Route exact path="/women" component={WomenPage}/>
        <Route exact path="/men" component={MenPage}/>
      </Switch>
    </div>
  )
}

export default App;
