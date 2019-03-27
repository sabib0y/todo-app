import React, { Component } from 'react';

class ListItems extends Component {
    // handleRemove = (e) => {
    //     e.preventDefault();
    //     this.props.removeItem(this.props.items);
    // };


  render() {
      return (
          <div className="input-block li" >
              <div className="item-wrapper">
                  <span className="checkbox">
                      <input
                          type="checkbox"
                          value={this.props.items.item}
                          checked={this.props.isActive ? 'checked' : ''}
                          onChange={this.props.handleChange}
                      />
                  </span>

                  <div>
                      < input
                          type='text'
                          className="item"
                          defaultValue={this.props.items.item}
                      />
                      <button
                          className="button"
                          onClick={this.props.removeItem}
                      >
                          remove
                      </button>
                  </div>
              </div>
          </div>
      );
  }
}

export default ListItems;
