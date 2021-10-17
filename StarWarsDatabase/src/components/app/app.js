import React from 'react';
import {BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";

import Header from '../header';
import RandomPlanet from '../random-planet';
import {PeoplePage, StarshipPage, PlanetPage} from '../pages';
import SwapiService from '../../services/swapi-service';
import {SwapiProvider} from '../swapi-service-context';
import { StarshipsDetail } from '../sw-components';

import './app.css';

const swapi = new SwapiService()

const App = () => {
  return (
    <SwapiProvider value={swapi}>
     <Router>
      <div>
        <Header />
        <RandomPlanet />

        <Route path='/' exact={true} render={() => <h1>Welcome page</h1>}/>
        <Route path='/people/:id?' component={PeoplePage}/>
        <Route path='/planets/' component={PlanetPage}/>
        <Route path='/starships/' exact={true} component={StarshipPage}/>
        <Route path='/starships/:id' render={({match, location, history}) => {
          return <StarshipsDetail selectedItemId={match.params.id}/>
        }} />

        
      </div>
     </Router>
    </SwapiProvider>
  );
};

export default App;
