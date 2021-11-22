
import React from 'react';

// 暴露组件
export default function Hello(props) {
    console.log(props);
    // 注意：props 的属性是只读的，不能修改
    return <div>你好 {props.name}</div>
}
