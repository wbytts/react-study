import React, { useState, useEffect, useCallback } from 'react';
// 将 ahooks 的hook通过AHK导出（npm install ahooks --save）
export import * as AHK from 'ahooks';

/**
 * 布尔值Hook，可以控制真、假、或者切换
 * @param {} initVal
 * @returns
 */
export function useBoolean(initVal = false) {
  const [flag, setFlag] = useState(initVal);
  const setTrue = useCallback(() => setFlag(true), [setFlag]);
  const setFalse = useCallback(() => setFlag(false), [setFlag]);
  const toggle = useCallback(() => setFlag(!flag), [setFlag]);
  return { flag, setTrue, setFalse, toggle };
}

/**
 * 类似useBoolean，不过在名字上是显示和隐藏的意思
 * @param {*} initVal
 * @returns
 */
export function useVisible(initVal = false) {
  const [visible, setVisible] = useState(initVal);
  const show = useCallback(() => setVisible(true), [setVisible]);
  const hide = useCallback(() => setVisible(false), [setVisible]);
  return { visible, show, hide };
}

/**
 * 输入框值的控制
 * @param {*} initVal
 * @returns
 */
export function useInputValue(initVal = '') {
  const [value, setValue] = useState(initVal);
  const change = useCallback(event => setValue(event.target.value), []);
  const clear = useCallback(event => setValue(''), []);
  return { value, change, clear };
}
