import React, { Component } from 'react';
import './item-list.css';


class ItemList extends Component {
  prepareItems = (itemList) => {
    return itemList.map((item) => {
      return (
        <li
          onClick={() => this.props.onItemSelected(item.id)}
          key={item.id}
          className="list-group-item"
        >
          {this.props.renderFunction(item)}
        </li>
      )
    })
  }

  render() {
    const content = this.prepareItems(this.props.data)

    return (
      <ul className="item-list list-group">
        {content}
      </ul>
    );
  }
}

export default ItemList
