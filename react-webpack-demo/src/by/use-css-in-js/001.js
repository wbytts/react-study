import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
  row: {
    backgroundColor: '#ccc',
    marginTop: '10px',
  },
};

function App() {
  return (
    <div>
      <div style={styles.row}>111</div>
      <div style={styles.row}>222</div>
      <div style={styles.row}>333</div>
    </div>
  );
}

const mydiv = (
  <div>
    <App />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
