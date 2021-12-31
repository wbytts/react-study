import React from 'react';
import ReactDOM from 'react-dom';
import styled, {css} from 'styled-components';

/*
https://styled-components.com/
*/


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`;




const mydiv = (
    <Container>
      <Button>Normal Button</Button>
      <Button primary>Primary Button</Button>
    </Container>
);



ReactDOM.render(mydiv, document.querySelector('#app'));
