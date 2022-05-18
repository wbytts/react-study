import LogListItem from './LogListItem';
import StudyForm from './StudyForm';

let LogList = props => {
  const { logs } = props;
  return (
    <div className="logs">
      <StudyForm />
      <hr />
      {logs.map(log => (
        <LogListItem log={log} />
      ))}
    </div>
  );
};

export default LogList;
