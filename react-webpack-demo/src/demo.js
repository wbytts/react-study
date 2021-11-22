import React from 'react';
import ReactDOM from 'react-dom';

const usernameInput = <input type="text" name="username" />;
const inpupasswordInput = <input type="text" name="username" />;

const FFF = (
    <form>
        用户名: {usernameInput} <br />
        密码: {inpupasswordInput}
    </form>
);

const mydiv = <div>{FFF}</div>;

ReactDOM.render(mydiv, document.querySelector('#app'));
