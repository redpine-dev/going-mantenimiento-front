import {
  addWeeks,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';

const generateMonthWeeks = (
  currentDate: Date,
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6,
): Date[] => {
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);

  const calendarStart = startOfWeek(monthStart, { weekStartsOn });

  const calendarEnd = endOfWeek(monthEnd, { weekStartsOn });

  const weeks: Date[] = [];
  let currentWeekStart = calendarStart;

  while (currentWeekStart <= calendarEnd) {
    weeks.push(new Date(currentWeekStart));
    currentWeekStart = addWeeks(currentWeekStart, 1);
  }

  return weeks;
};

export { generateMonthWeeks };
