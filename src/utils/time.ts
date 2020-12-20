const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDay = (time: number | undefined = 0) => {
  const date = new Date(0);
  date.setUTCSeconds(time);
  return date.getDate();
};

export const getDayOfWeek = (time: number | undefined = 0) => {
  const date = new Date(0);
  date.setUTCSeconds(time);
  return days[date.getDay()];
};

export const getMonth = (time: number | undefined = 0) => {
  const date = new Date(0);
  date.setUTCSeconds(time);
  return months[date.getMonth()];
};

export const getHour = (time: number | undefined = 0) => {
  const date = new Date(0);
  date.setUTCSeconds(time);
  return date.getHours();
};
