import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {

  state = {
    date: new Date()
  };

  componentDidMount() {
    const tid = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
    this.setState({ tid });
  }

  componentWillUnmount() {
    clearInterval(this.state.tid);
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <input type="text" /> <br />
        <span>现在是: {this.state.date.toTimeString()}</span>
      </div>
    );
  }
}

const mydiv = (
  <div>
    <Demo x={1} />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
