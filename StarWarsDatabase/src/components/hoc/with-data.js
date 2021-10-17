import React from 'react';
// import SwapiService from '../../services/swapi-service';


// const swapi = new SwapiService()



const withData = (Wrapper) => {

  return class extends React.Component {
    state = {
      data: []
    }

    componentDidMount = () => {
      this.props.getData().then((data) => {
        this.setState({data: data})
      })
    }

    render() {
      return <Wrapper data={this.state.data} {...this.props} />
    }
  }
}


export default withData;
