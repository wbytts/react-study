import React from 'react';
import ReactDOM from 'react-dom';
import use$todo from './flooks/todo';
import { useInputValue } from './hooks/my-hooks';

function App() {
  const { todos, add } = use$todo();
  const { value: inputValue, change: changeInput } = useInputValue();

  return (
    <div>
      <input value={inputValue} onChange={changeInput} />
      <button onClick={() => add(inputValue)}>添加</button>
      <div>
        {todos.map(x => (
          <div>{`#${x}#`}</div>
        ))}
      </div>
    </div>
  );
}

const mydiv = (
  <div>
    <App />
  </div>
);

ReactDOM.render(mydiv, document.querySelector('#app'));
