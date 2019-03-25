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
    // this.updateList();
  };

  // updateList() {
  //   const { data } = this.state;
  //
  //   console.log('listArr...', data)
  // }


  resetField(){

  }

  handleRemove() {
    console.log('deleting')
  }

  render() {
    const { data } = this.state;

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
                    handleRemove={this.handleRemove}
                    key={key}
                    items={this.state.data[i]}
                />
              ))
            }

            <EmptyItem
                addItem={this.addItem}
                value={this.state.inputState}
            />
          </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
