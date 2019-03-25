import React, { Component } from 'react';

class ListItems extends Component {
  render() {
    return (
        <div className="input-block">
            <div className="item-wrapper">
                <span className="checkbox"><input type="checkbox"/></span>
                <p className="item">{this.props.items.item}</p>
                <span className="button" onClick={this.props.handleRemove}>

            </span>
            </div>
        </div>
    );
  }
}

export default ListItems;
