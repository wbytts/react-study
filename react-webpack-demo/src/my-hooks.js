import React from 'react';

export function useVisible(initVal = false) {
  const [visible, setVisible] = React.useState(initVal);
  const show = React.useCallback(() => setVisible(true), [setVisible]);
  const hide = React.useCallback(() => setVisible(false), [setVisible]);
  return { visible, show, hide };
}

export function useInputValue(defaultValue = '') {
  const [value, setValue] = React.useState(defaultValue);
  const change = React.useCallback(event => setValue(event.target.value), []);
  const clear = React.useCallback(event => setValue(''), []);
  return { value, change, clear };
}
