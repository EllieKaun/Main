import React from 'react';
import ItemList from '../item-list';
import {withData, withSwapiService} from '../hoc'


const withRenderFunction = (View, renderFunction) => {
  return (props) => {
    return (
      <View {...props} renderFunction={renderFunction} />
    )
  }
}


const mapMathodsToPeople = (swapi) => {
  return {
    getData: swapi.getAllPeople
  }
}

const mapMathodsToPlanets = (swapi) => {
  return {
    getData: swapi.getAllPlanets
  }
}

const mapMathodsToStarships = (swapi) => {
  return {
    getData: swapi.getAllStarships
  }
}


const PeopleList = (
  withSwapiService(
    withData(
      withRenderFunction(
        ItemList,
        (item) => <span>{item.name} ({item.birthYear})</span>
      )
    ),
    mapMathodsToPeople
  )
);


const PlanetsList = (
  withSwapiService(
    withData(
      withRenderFunction(
        ItemList,
        (item) => <span>{item.name} ({item.population})</span>
      )
    ),
    mapMathodsToPlanets
  )
);
const StarshipsList = (
  withSwapiService(
    withData(
      withRenderFunction(
        ItemList,
        (item) => <span>{item.name} ({item.model})</span>
      )
    ),
    mapMathodsToStarships
  )
);

export {PeopleList, PlanetsList, StarshipsList}
