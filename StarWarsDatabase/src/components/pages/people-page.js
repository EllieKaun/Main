import React from 'react';
import {PeopleList, PersonDetail} from '../sw-components'
import {withRouter} from "react-router-dom";

import Row from '../row';
  


class PeoplePage extends React.Component {
  onItemSelected = (id) => {
    this.props.history.push(id)
  }

  render() {
    const selectedId = this.props.match.params.id ? this.props.match.params.id : 1

    const itemList = <PeopleList onItemSelected={this.onItemSelected}/>
    const personDetails = <PersonDetail selectedItemId={selectedId} />


    return (
      <Row
        leftComponent={itemList}
        rightComponent={personDetails}
      />

    )

  }
}

export default withRouter(PeoplePage)
