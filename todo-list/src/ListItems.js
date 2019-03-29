import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars, faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";

class ListItems extends Component {
    triggerChange = (e) => {
        this.props.handleInputChange(e, this.props.index);
    };


  render() {
      return (
          <div className={`${this.props.items.isActive ? 'checked' : ''} input-block`}>
              <div className="item-wrapper">
                  <span className="draggable">
                      <FontAwesomeIcon icon={faBars} />
                  </span>

                  <div className="field-wrapper">
                  <span className="checkbox">
                      <input
                          type="checkbox"
                          value={this.props.items.dateTime}
                          onChange={this.props.handleChange}
                          checked={this.props.items.isActive ? 'checked' : ''}
                      />
                      <span className="fake-box">
                          <FontAwesomeIcon icon={faCheck} />
                      </span>
                  </span>

                      < input
                          type='text'
                          className="item"
                          onChange={this.triggerChange}
                          value={this.props.items.item}
                      />
                      <button
                          className="remove"
                          onClick={this.props.removeItem}
                      >
                          <FontAwesomeIcon icon={faTimes} />
                      </button>
                  </div>
              </div>
          </div>
      );
  }
}

export default ListItems;
