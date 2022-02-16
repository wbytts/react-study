import React, {useState, useCallback} from 'react';
import ReactDOM, {createPortal} from 'react-dom';
import styled from 'styled-components';

function useVisible(initVal = false) {
  const [visible, setVisible] = useState(initVal);
  const show = useCallback(() => setVisible(true), [setVisible]);
  const hide = useCallback(() => setVisible(false), [setVisible]);
  return {visible, show, hide};
}


const ScWrapper = styled.div`
  div {
    width: 200px;
    height: 200px;
    border: 1px solid red;
  }
`;

const App = props => {
  const boxVisible = useVisible();

  return (
    <ScWrapper>
      <button onClick={boxVisible.show}>显示</button>
      <button onClick={boxVisible.hide}>隐藏</button>
      <br/>
      {boxVisible.visible && <div></div>}
    </ScWrapper>
  );
};

const mydiv = (
  <div>
    <App/>
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
