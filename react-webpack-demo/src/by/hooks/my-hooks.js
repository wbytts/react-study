import React, { useState, useEffect, useCallback, useMemo, useReducer, useContext, useRef } from 'react';
// 将 ahooks 的hook通过AHK导出（npm install ahooks --save）
import * as A from 'ahooks';

/**
 * 布尔值Hook，可以控制真、假、或者切换
 * @param {*} initVal
 * @returns
 */
export const useBoolean = (initVal = false) => {
  const [flag, setFlag] = useState(initVal);
  const setTrue = useCallback(() => setFlag(true), [setFlag]);
  const setFalse = useCallback(() => setFlag(false), [setFlag]);
  const toggle = useCallback(() => setFlag(!flag), [setFlag]);
  return { flag, setTrue, setFalse, toggle };
};

/**
 * 类似useBoolean，不过在名字上是显示和隐藏的意思
 * 常用语控制对话框的显示隐藏
 * @param {*} initVal
 * @returns
 */
export const useVisible = (initVal = false) => {
  const [visible, setVisible] = useState(initVal);
  const show = useCallback(() => setVisible(true), [setVisible]);
  const hide = useCallback(() => setVisible(false), [setVisible]);
  return { visible, show, hide };
};

/**
 * 输入框值的控制
 * @param {*} initVal
 * @returns
 */
export const useInputValue = (initVal = '') => {
  const [value, setValue] = useState(initVal);
  const change = useCallback(event => setValue(event.target.value), []);
  const clear = useCallback(event => setValue(''), []);
  return { value, change, clear };
};

/**
 * 异步请求逻辑
 * @param {} asyncFunction
 * @returns 异步任务执行函数、加载状态、数据、错误
 */
export const useAsync = asyncFunction => {
  // 设置三个异步逻辑相关的 state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // 定义一个 callback 用于执行异步逻辑
  const execute = useCallback(() => {
    // 请求开始时，设置 loading 为 true，清除已有数据和 error 状态
    setLoading(true);
    setData(null);
    setError(null);
    return asyncFunction()
      .then(response => {
        // 请求成功时，将数据写进 state，设置 loading 为 false
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        // 请求失败时，设置 loading 为 false，并设置错误状态
        setError(error);
        setLoading(false);
      });
  }, [asyncFunction]);

  return { execute, loading, data, error };
};

/**
 * 页面滚动条滚了
 * @returns
 */
export const useScroll = () => {
  let getPosition = () => {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
      y: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
    };
  };

  // 定一个 position 这个 state 保存滚动条位置
  const [position, setPosition] = useState(getPosition());

  useEffect(() => {
    const handler = () => {
      console.log('页面滚动');
      setPosition(getPosition(document));
    };
    // 监听 scroll 事件，更新滚动条位置
    document.addEventListener('scroll', handler);
    return () => {
      // 组件销毁时，取消事件监听
      document.removeEventListener('scroll', handler);
    };
  }, []);
  return position;
};

/**
 * 让一个DIV变成可拖动的
 * @param {*} target
 */
export const useDragDiv = target => {
  A.useDrag('', target, {
    onDragStart(e) {},
    onDragEnd(e) {
      target.current.style.left = e.pageX - target.current.offsetWidth / 2 + 'px';
      target.current.style.top = e.pageY - target.current.offsetHeight / 2 + 'px';
    },
  });
};
