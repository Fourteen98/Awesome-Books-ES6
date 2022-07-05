const CustomTime = () => {
  const dateContainer = document.querySelector('.time-container');
  const getDate = new Date();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const year = getDate.getFullYear();
  const month = months[getDate.getMonth()];
  const current = getDate.getDate();
  const hour = getDate.getHours();
  const minutes = getDate.getMinutes();
  const second = getDate.getSeconds();

  dateContainer.innerHTML = (hour < 12) ? `${month} ${current} ${year}, ${hour} ${minutes} ${second} AM`
    : `${month} ${current} ${year}, ${hour}: ${minutes}: ${second} PM`;
};

export default CustomTime;
