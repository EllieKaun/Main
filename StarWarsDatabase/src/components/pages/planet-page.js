import React from 'react';
import { PlanetsList, PlanetsDetail} from '../sw-components'

import Row from '../row';
  


class PlanetPage extends React.Component {

  
  state = {
    selectedItemId: 3
  }

  onItemSelected = (id) => {
    this.setState({selectedItemId: id})
  }

  render() {

    const planetsList = <PlanetsList onItemSelected={this.onItemSelected}/>
    const planetsDetail = < PlanetsDetail selectedItemId={this.state.selectedItemId} />


    return (
      <>
      <Row
        leftComponent={planetsList}
        rightComponent={planetsDetail}
      />
      </>
    )

  }
}

export default PlanetPage
