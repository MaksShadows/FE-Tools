
const monthsNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

// вернет месяц и год для недели, в которой находится переданный день
export const getDisplayedMonth = date => {
  const weekStart = getStartOfWeek(date);
  const weekEnd = shmoment(date).add('days', 6).result();
  const startMonth = weekStart.getMonth();
  const startYear = weekStart.getFullYear();
  const endMonth = weekEnd.getMonth();
  const endYear = weekEnd.getFullYear();
  const isSameMonth = startMonth === endMonth;
  if (isSameMonth) {
      return `${monthsNames[startMonth]} ${startYear}`;
  }
  const isSameYear = startYear === endYear;
  return isSameYear
      ? `${monthsNames[startMonth]} - ${monthsNames[endMonth]} ${startYear}`
      : `${monthsNames[startMonth]} ${startYear} - ${monthsNames[endMonth]} ${endYear}`;
};

