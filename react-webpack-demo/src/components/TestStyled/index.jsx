import StyledWrapper from './styled';
import styled, {css} from 'styled-components';
import React from 'react';

class TestStyled extends React.Component {
  render() {
    return (
      <StyledWrapper>
        <i>lalala</i> <br />
        <i class="two">lalala</i> <br />
      </StyledWrapper>
    );
  }
}

export default TestStyled;

