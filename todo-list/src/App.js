import React, { Component } from 'react';
import './App.scss';
import EmptyItem from './EmptyItem';
import ListItems from './ListItems';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class App extends Component {
  state = {
    data: [],
    inputState:'',
  };

  addItem = (item) => {
    const { data } = this.state;
    // update state
    this.setState({
      data: [...data, {
        item: item,
        dateTime: Date.now(),
        isActive: false}],
    });
  };

  updateInputState = (value) => {
    this.setState({inputState: value});
  };

  handleChange = (event) => {
    // backup state
    const data = [...this.state.data];
    // data.forEach(listItem => {
    //   if(listItem.item === e.target.value)
    //     listItem.isActive = !listItem.isActive;
    // });
    // //fix issue
    // const mmm = data.map(item => return (
    //     item[parsedIndex].
    // ))
    //   data.splice(parsedIndex, 1);
      // update state
      // this.setState({data: [...data] });
    const target = event.target.name;
    console.log(target);
  };

  removeItem(item){
    const parsedIndex = parseFloat(item);
    // backup state
    const data = [...this.state.data];
    // //fix issue
    if(parsedIndex !== -1){
      data.splice(parsedIndex, 1);
      // update state
      this.setState({data: [...data] });
    }
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
                    removeItem={this.removeItem.bind(this)}
                    key={key}
                    index={key}
                    isActive={this.state.isActive}
                    items={this.state.data[i]}
                    handleChange={this.handleChange}
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
