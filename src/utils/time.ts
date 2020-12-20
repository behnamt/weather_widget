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

export const getDay = (time: number | undefined) =>
  new Date(time || 0).getDate();

export const getDayOfWeek = (time: number | undefined) =>
  days[new Date(time || 0).getDay()];

export const getMonth = (time: number | undefined) =>
  months[new Date(time || 0).getMonth()];
