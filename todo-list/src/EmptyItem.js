import React, { Component } from 'react';

class EmptyItem extends Component {
    inputRef = React.createRef();

    handleClick = () => {
        let inputVal = this.inputRef.current.value;
        if(inputVal){
            this.props.addItem(inputVal)
        }
        this.props.updateInputState('');
        this.inputRef.current.value = '';
        this.inputRef.current.focus();
    };

    passValue = () => {
        this.props.updateInputState(this.inputRef.current.value);
    };

    render() {
    return (
      <div className="empty input-block">
        <div className="item-wrapper">
            <span className="fake-checkbox"></span>
            <div>
                <input
                    type="text"
                    placeholder="next item"
                    ref={this.inputRef}
                    value={this.props.inputState}
                    onChange={this.passValue}
                />
                <span className="button" onClick={this.handleClick}>
                    arrow button
                </span>
            </div>
        </div>
      </div>
    );
  }
}

export default EmptyItem;
