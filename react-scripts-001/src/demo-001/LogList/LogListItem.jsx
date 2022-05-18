
let LogListItem = props => {
  const {
    log: { month, day, desc, time },
  } = props;
  return (
    <div class="item">
      <div class="date">
        <div class="month">{month}</div>
        <div class="day">{day}</div>
      </div>
      <div class="content">
        <h2 class="desc">{desc}</h2>
        <div class="time">{time}</div>
      </div>
    </div>
  );
};

export default LogListItem;