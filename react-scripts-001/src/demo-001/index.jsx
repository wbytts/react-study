import './index.css';
import LogList from './LogList/LogList';

let logs = [{ id: 1, month: '五月', day: 17, desc: '学习xxx', time: '一小时' }];

let App = () => {
  return <LogList logs={logs} />;
};

export default App;
