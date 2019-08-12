import React, {Component} from 'react';
import './App.css';
import axios from './axiosSetting.js'

class App extends Component {
  constructor() {
    super();

    this.state = {
      memos: [],
    };
  }

  componentDidMount() {
    axios
      .get('/api/v1/memos')
      .then((response) => {
        console.log(response);

        this.setState({
          memos: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Memotter</h1>
        </header>

        <ul>
          {this.state.memos.map(memo => {
            return (
              <li key={memo.id}>
                {memo.content}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
