import { ReactNode } from 'react';

type CalendarMonthProps = {
  currentDate: Date;
  selectedDate?: Date;
  onDayClick?: (date: Date) => void;
  renderDayContent?: (date: Date) => ReactNode;
  className?: string;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
};

type CalendarMonthContextValue = {
  currentDate: Date;
  selectedDate?: Date;
  onDayClick?: (date: Date) => void;
  monthWeeks: Date[];
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
};

type CalendarMonthHeaderProps = {
  className?: string;
};

type CalendarMonthBodyProps = {
  children?: ReactNode;
  className?: string;
};

type CalendarMonthWeeksProps = {
  children?: (weekStart: Date, index: number) => ReactNode;
};

export type {
  CalendarMonthBodyProps,
  CalendarMonthContextValue,
  CalendarMonthHeaderProps,
  CalendarMonthProps,
  CalendarMonthWeeksProps,
};
