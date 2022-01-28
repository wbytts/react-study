import React, { useState, useEffect, useCallback } from 'react';

/**
 * 布尔值Hook，可以控制真、假、或者切换
 * @param {} initVal
 * @returns
 */
export default function useBoolean(initVal = false) {
  const [flag, setFlag] = useState(initVal);
  const setTrue = useCallback(() => setFlag(true), [setFlag]);
  const setFalse = useCallback(() => setFlag(false), [setFlag]);
  const toggle = useCallback(() => setFlag(!flag), [setFlag]);
  return { flag, setTrue, setFalse, toggle };
}
