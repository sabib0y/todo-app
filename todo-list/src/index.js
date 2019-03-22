import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



// // const { data } = this.state;
// // copy state
// const data = {...this.state.data}
// // edit copy
//
// // update state
// this.setState({
//     data: {
//         item: item,
//         dateTime: Date.now()
//     }
// });
//
// this.updateList();
// // this.setState({...data, {item} })


// copy state
// const data = {...this.state.data}
// // edit copy
// data[`item`] = item;
// // update state
// this.setState({data});
// this.updateList();