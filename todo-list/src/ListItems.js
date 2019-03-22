import React, { Component } from 'react';

class ListItems extends Component {
  render() {
    return (
        <div className="input-block">
            <div className="item-wrapper">
                <span className="fake-checkbox"></span>
                <input
                    type="text"
                    placeholder="next item"
                    ref={this.inputRef}
                />
                <span className="button" onClick={this.handleClick}>
            </span>
            </div>
        </div>
    );
  }
}

export default ListItems;
