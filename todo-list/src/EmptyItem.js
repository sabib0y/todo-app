import React, { Component } from 'react';

class EmptyItem extends Component {
    constructor(){
        super();
    }
    inputRef = React.createRef();

    handleClick = () => {
        const inputVal = this.inputRef.current.value;
         if(inputVal){
            this.props.addItem(inputVal)
         }
        this.inputRef.target.reset();
    };


    render() {
    return (
      <div className="empty input-block">
        <div className="item-wrapper">
            <span className="fake-checkbox"></span>
            <input
                type="text"
                placeholder="next item"
                ref={this.inputRef}
            />
            <span className="button" onClick={this.handleClick}>
                arrow button
            </span>
        </div>
      </div>
    );
  }
}

export default EmptyItem;
