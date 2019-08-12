import React, {Component} from 'react';

class ShareInput extends Component {
  render() {
    return (
      <div>
        <input type="text" value={this.props.value} onChange={this.props.changeInputValue}/>
        <button onClick={this.props.addPost}>シェア</button>
      </div>
    )
  }
}

export default ShareInput;

