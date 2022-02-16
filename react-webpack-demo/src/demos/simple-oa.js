import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Ul = styled.ul`
  padding-left: 0;
  list-style-type: none;

  width: 100px;
  background-color: #CCC;
  li {
    height: 40px;
    line-height: 40px;
    text-align: center;
    &:hover {
      background-color: skyblue;
    }
    &.selected {
      background-color: skyblue;
    }
  }
`;

function MyMenu(props) {
  const { data } = props;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Ul>
      {data.map(item => (
        <li
          key={item.id}
          className={selectedIndex == item.id ? 'selected' : ''}
          onClick={() => setSelectedIndex(item.id)}
        >
          {item.text}
        </li>
      ))}
    </Ul>
  );
}

const mydiv = (
  <div>
    <MyMenu data={menus} />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
