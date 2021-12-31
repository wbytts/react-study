import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';
import TestStyled from './components/TestStyled'



const mydiv = (
  <div>
    <TestStyled></TestStyled>
  </div>
);

export default


ReactDOM.render(mydiv, document.querySelector('#app'));
