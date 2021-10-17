import React, { Component } from 'react';
import './item-details.css';


const Record = ({label, fieldName, item}) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[fieldName]}</span>
    </li>
  )
}


class ItemDetails extends Component {
  state = {
    item: {}
  }

  componentDidMount() {
    const id = this.props.selectedItemId
    this.props.getData(id).then(data => this.setState({item: data}))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedItemId !== this.props.selectedItemId) {
      const id = this.props.selectedItemId
      this.props.getData(id).then(data => this.setState({item: data}))
    }
  }

  render() {
    const {id, name} = this.state.item
    const image_url = this.props.getImage({id: id })

    return (
      <div className="person-details card">
        <img className="person-image"
          src={image_url} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">

            {React.Children.map(this.props.children, (item) => {
                  const newElement = React.cloneElement(item, {item: this.state.item})
                  return newElement;
                }
              )
            }

          </ul>
        </div>
      </div>
    )
  }
}

export {Record, ItemDetails}
