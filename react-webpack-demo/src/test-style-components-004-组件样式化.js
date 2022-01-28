import React from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

const Link = ({ className, children }) => (
  <a className={className}>
    {children}
  </a>
);

const StyledLink = styled(Link)`
  color: palevioletred;
  font-weight: bold;
`;

ReactDOM.render(<StyledLink>123</StyledLink>, document.querySelector('#app'));
