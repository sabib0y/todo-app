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
      data: [...data, {
        item: item,
        dateTime: Date.now(),
        isActive: false}],
    });
  };

  updateInputState = (value) => {
    this.setState({inputState: value});
  };

  handleChange = (e) => {
    const value = parseFloat(e.target.value);
    const data = [...this.state.data];
    data.forEach(listItem => {
      if(listItem.dateTime === value)
        listItem.isActive = !listItem.isActive;
    });
    this.setState({data: [...data] });
  };

  handleInputChange = (e, index) => {
    const value = e.target.value;
    const data = [...this.state.data];
    data[index].item = value;
    this.setState({data: [...data] });
    console.log(data);
  };

  removeItem(item){
    const parsedIndex = parseFloat(item);
    // backup state
    const data = [...this.state.data];
    // //fix issue
    if(parsedIndex !== -1){
      data.splice(parsedIndex, 1);
    }
    // update state
    this.setState({data: [...data] });
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
                    items={this.state.data[i]}
                    handleChange={this.handleChange}
                    handleInputChange={this.handleInputChange}
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
