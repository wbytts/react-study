/*
每个组件实例上挂载一个 _hooks 属性，保证了组件之间不会影响。

每当遇到一个 hooks 方法，就将其 push 到 currentComponent._hooks._list 中，且 currentIndex 加一。

每次渲染进入一个组件的时候，都会从将 currentIndex 重置为 0 。遇到 hooks 方法时，currentIndex 重复第二步。
这样可以把 currentIndex 和 currentComponent._hooks._list 中的对应项匹配起来，直接取上次缓存的值。

函数组件每次重新执行后，useState 中还能保持上一次的值，就是来自于步骤3中的缓存。

由于依赖了 currentComponent 实例，所以 hooks 不能用于普通函数中。
*/
