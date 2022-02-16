import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`;

const TomatoButton = styled(Button)`
  background: tomato;
`;


// 注意：不要把styled写在render里面或者函数式组件里面！速度会很慢！

const App = () => (
  <div>
    <Button>I'm purple.</Button>
    <br />
    <TomatoButton>I'm red.</TomatoButton>
  </div>
);

ReactDOM.render(<App />, document.querySelector('#app'));
