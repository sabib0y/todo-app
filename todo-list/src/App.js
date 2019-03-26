import React, { Component } from 'react';
import './App.scss';
import EmptyItem from './EmptyItem';
import ListItems from './ListItems';

class App extends Component {
  state = {
    data: [],
    inputState:'',
  };

  addItem = (item) => {
    const { data } = this.state;
    // update state
    this.setState({
      data: [...data, { item: item, dateTime: Date.now()}],
    });
  };

  updateInputState = (value) => {
    this.setState({inputState: value});
  };

  removeItem = (item) => {
    // backup state
    // debugger;
    console.log(item, this.state);
    // const data = [...this.state.data];
    //fix issue
    // delete data[item];
    // update state
    // this.setState([data]);
    // console.log(data[item]);
  };

  render() {
    return (
      <div className="App">
        <div className="note-wrapper">
          <div className="inner-wrapper">

          <header className="App-header">
            <h1>Todo app!</h1>
          </header>
          <div className="container">
            {Object.keys(this.state.data).map((key, i) => (
                <ListItems
                    removeItem={this.removeItem}
                    key={key}
                    index={key}
                    items={this.state.data[i]}
                />
              ))
            }

            <EmptyItem
                addItem={this.addItem}
                value={this.state.inputState}
                updateInputState={this.updateInputState}
            />
          </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
