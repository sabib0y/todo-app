import React, { Component } from 'react';

class ListItems extends Component {
    // handleRemove = (e) => {
    //     e.preventDefault();
    //     this.props.removeItem(this.props.items);
    // };


  render() {
      if (this.props.items.item !== null){
          return (
              <div className="input-block li" >
                  <div className="item-wrapper">
                      <span
                          className="checkbox"
                      >
                          <input
                              type="checkbox"
                              checked={this.props.isActive ? 'checked' : ''}
                              onChange={this.props.changeActive(this.props.index)}
                          />
                      </span>
                      < input
                          type='text'
                          className="item"
                          defaultValue={this.props.items.item}
                      />
                      <button
                          className="button"
                          onClick={() => {this.props.removeItem(this.props.index)}}
                      >
                          remove
                      </button>
                  </div>
              </div>
          );
      }

  }
}

export default ListItems;
